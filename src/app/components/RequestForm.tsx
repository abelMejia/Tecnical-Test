'use client';

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Spinner from "./Spinner";

interface Service {
  label?: string
  value?: string
}

interface IFormInputs {
  name: string
  company: string
  email: string
  service: Service[]
  comment: string
}

const options = [
  { value: "html", label: " HTML" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

function RequestForm({ callback }: { callback: (data: any) => void }) {
  const [loading, setLoading] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
      defaultValues: {
        name: '',
        company: '',
        email: '',
        comment: ''
      },
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (formData) => {
      setLoading(true);
      console.log('formData', formData)

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });

        const data = await response.json();
        console.log('data', data)
        callback(data)

      } catch (error) {
        console.error("Error en la petición:", error);
      } finally {
        setLoading(false);
      }

  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Nombre
              </label>

              <Controller
                name="name"
                control={control}
                rules={{ required: "El Nombre es requerido" }}
                render={({ field }: any) => <input variant="outlined" {...field}
                    placeholder="ingresa tu nombre."
                    className={
                      `w-full px-4 py-2 mt-1
                      border border-gray-300
                      dark:border-gray-600 rounded-lg
                      dark:bg-gray-800 dark:text-white
                      outline-none transition
                      ${errors.name ? "focus:border-red-500 focus:ring-1 focus:ring-red-500 blur:bg-red-100" :
                      "focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}`
                    }
                />
                }
              />
              {errors && <p className='text-red-500 text-sm'>{errors.name?.message}</p>}
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Empresa
              </label>

              <Controller
                name="company"
                control={control}
                rules={{ required: "La empresa es requerida." }}
                render={({ field }: any) => <input  {...field}
                placeholder="ingresa nombre de la empresa."
                className={
                  `w-full px-4 py-2 mt-1
                  border border-gray-300
                  dark:border-gray-600 rounded-lg
                  dark:bg-gray-800 dark:text-white
                  focus:ring-2 focus:ring-gray-500
                  focus:border-gray-500 outline-none transition
                  ${errors.company ? "focus:border-red-500 focus:ring-1 focus:ring-red-500 blur:bg-red-100" :
                      "focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}`
                }/>}
              />
              {errors && <p className='text-red-500 text-sm'>{errors.company?.message}</p>}
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Correo de la empresa
              </label>

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "El correo de la empresa es requerido.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Correo inválido."
                  }}
                }
                render={({ field }: any) => <input {...field}

                placeholder="ingresa correo de la empresa."
                className={
                  `w-full px-4 py-2 mt-1
                  border border-gray-300
                  dark:border-gray-600 rounded-lg
                  dark:bg-gray-800 dark:text-white
                  focus:ring-2 focus:ring-gray-500
                  focus:border-gray-500 outline-none transition
                  ${errors.email ? "focus:border-red-500 focus:ring-1 focus:ring-red-500 blur:bg-red-100" :
                      "focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}`
                }
                />}
              />
              {errors && <p className='text-red-500 text-sm'>{errors.email?.message}</p>}
          </div>

          <div className="relative" ref={selectRef}>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-white">
                  ¿Que servicio te interesa?
              </label>

              <Controller
                name="service"
                control={control}
                rules={{
                  required: "El servicio es requerido",
                }}
                render={({ field }: any) =>
                  <>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`
                        w-full flex justify-between items-center px-4 py-2 border border-gray-300
                       dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-1
                       focus:ring-gray-300 focus:border-gray-300 outline-none transition`
                      }
                    >
                      <span className={field.value ? "text-gray-700 dark:text-white" : "text-gray-400 dark:text-gray-500"}>
                        {field.value ? options.find(opt => opt.value === field.value)?.label : "Selecciona una opción"}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              field.onChange(option.value);
                              setIsDropdownOpen(false);
                            }}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                }
              />
              {errors && <p className='text-red-500 text-sm'>{errors.service?.message}</p>}
          </div>

          <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-white">
                      ¿Algo que necesites contarnos?
                </label>

                <Controller
                  name="comment"
                  control={control}
                  render={({ field }: any) =>
                    <textarea
                        placeholder='opcional'
                        rows={2} cols={30}
                        className={
                          `w-full px-4 py-2 mt-1
                          border border-gray-300
                          dark:border-gray-600 rounded-lg
                          dark:bg-gray-800 dark:text-white
                          focus:ring-2 focus:ring-gray-500
                          focus:border-gray-500 outline-none transition
                          ${errors.comment ? "focus:border-red-500 focus:ring-1 focus:ring-red-500 blur:bg-red-100" :
                          "focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}`
                        }

                        {...field}
                  />}
                />
            </div>


            <div className='flex justify-center'>
            <button
                  className={`w-full sm:w-auto px-20 py-2 rounded-xl
                    dark:bg-gray-300 dark:text-gray-700
                    bg-gray-700 text-gray-50
                    transition-all duration-200 ease-in-out
                    active:scale-95 hover:bg-gray-600 dark:hover:bg-gray-400
                    flex justify-center items-center relative
                    ${
                        loading
                          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                          : "bg-gray-600 hover:bg-gray-700 text-white"
                    }`
                  }
                    disabled={loading}
                >
                  Enviar
                  {loading && (
                    <div className="flex ml-2">
                      <Spinner />
                    </div>
                  )}
              </button>

            </div>
      </form>
    )
}

export default RequestForm;

