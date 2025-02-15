import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useState } from 'react';

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

function RequestForm({ callback }: { callback: (data: IFormInputs) => void} ) {
   const [loading, setLoading] = useState(false);

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

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      callback(data)

    } catch (error) {
      console.error("Error en la petición:", error);
    } finally {
      setLoading(false);
    }

  }

  const services = [
      { label: 'UI/UX Design', value: 'UI/UX' },
      { label: 'Cloud Services', value: 'Cloud' },
      { label: 'Data Analysis', value: 'data' },
      { label: 'IT support', value: 'it_support' },
  ];

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
              <label className="block text-sm font-medium text-gray-700">
                  Nombre
              </label>

              <Controller
                name="name"
                control={control}
                rules={{ required: "El Nombre es requerido" }}
                render={({ field }: any) => <InputText {...field}
                    placeholder="ingresa tu nombre."
                    className='w-full'
                    {...(errors.name ? { invalid: true } : {})}
                />
                }
              />
              {errors && <p className='text-red-500 text-sm'>{errors.name?.message}</p>}
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
                  Empresa
              </label>

              <Controller
                name="company"
                control={control}
                rules={{ required: "La empresa es requerida." }}
                render={({ field }: any) => <InputText  {...field}
                placeholder="ingresa nombre de la empresa."
                {...(errors.company ? { invalid: true } : {})}
                className='w-full'/>}
              />
              {errors && <p className='text-red-500 text-sm'>{errors.company?.message}</p>}
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">
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
                render={({ field }: any) => <InputText {...field}
                {...(errors.email ? { invalid: true } : {})}
                placeholder="ingresa correo de la empresa."
                className='w-full'/>}
              />
              {errors && <p className='text-red-500 text-sm'>{errors.email?.message}</p>}
          </div>

          <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  ¿Que servicio te interesa?
              </label>

              <Controller
                name="service"
                control={control}
                rules={{
                  required: "El servicio es requerido",
                }}
                render={({ field }: any) =>
                    <Dropdown {...field}
                      className='w-full md:w-14rem'
                      placeholder='Seleccionar'
                      options={services}
                      {...(errors.service ? { invalid: true } : {})}
                      optionLabel="label"
                    />
                }
              />
              {errors && <p className='text-red-500 text-sm'>{errors.service?.message}</p>}
          </div>

          <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                    ¿Algo que necesites contarnos?
              </label>

              <Controller
                name="comment"
                control={control}
                render={({ field }: any) =>
                  <InputTextarea placeholder='opcional' rows={2} cols={30} className='w-full' {...field}
                />}
              />
          </div>

          <div className='flex justify-center'>
            <Button label="Enviar" severity='info' disabled={loading}>
                  {loading && <ProgressSpinner
                    style={{width: '20px', height: '20px'}}
                    strokeWidth="8" fill="var(--surface-ground)"
                    animationDuration=".5s"
                  />}
            </Button>
          </div>

      </form>

  )
}

export default RequestForm
