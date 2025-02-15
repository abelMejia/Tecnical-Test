'use client';
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";

function Menu() {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
          setSubmenuOpen(false);
        }
      }

      if (submenuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [submenuOpen]);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
      <>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md bg-gray-50 dark:bg-gray-700">
          {isOpen ? <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-white" /> :
          <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-white" />}
        </button>

        <div className="hidden lg:flex space-x-6 text-gray-900 dark:text-white ml-8">

            <div className="relative" ref={submenuRef}>
              <button
                className="flex items-center dark:hover:text-gray-100 hover:text-gray-700"
                onClick={() => setSubmenuOpen(!submenuOpen)}
              >
                Soluciones
                <ChevronDownIcon
                  className={`h-5 w-5 ml-1 transition-transform ${
                    submenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                  submenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <a
                  className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => router.push('/users')}
                >Option 1</a>
                <a
                  className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => router.push('/')}
                >Option 2</a>
              </div>
            </div>
            <a
              className="cursor-pointer hover:text-gray-600 dark:hover:text-blue-400"
              onClick={() => router.push('/partnerships')}>
              Alianzas
            </a>
            <a className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-700">Compañía</a>
            <a className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-700">Comunidad</a>
        </div>

        {isOpen &&  <MobileNav menuRef={menuRef}/>}

      </>
    )
}

export default Menu;
