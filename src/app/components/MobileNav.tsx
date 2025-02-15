'use client';

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function MobileNav({ menuRef }: any) {
  const [submenuOpen, setSubmenuOpen] = useState(false)
   const router = useRouter()

  return (
    <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-gray-50 dark:bg-gray-900 border-t
          border-gray-300 dark:border-gray-700 z-50 shadow-lg`}
        >

          <button
                className="flex items-center justify-between w-full px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
            className={`pl-6 overflow-hidden transition-all duration-300 ease-in-out ${
              submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a
              className="cursor-pointer block py-2 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600"
              onClick={() => router.push('/users')}
            >
              Option 1
            </a>
            <a
              className="cursor-pointer block py-2 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600"
              onClick={() => router.push('/')}
            >
              Option 2
            </a>
          </div>

          <a
              onClick={() => router.push('/partnerships')}
              className="cursor-pointer block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                Alianzas
          </a>

          <a className="cursor-pointer block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            Compañía
          </a>

          <a className="cursor-pointer block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            Comunidad
          </a>
    </div>
  );
}
export default MobileNav;
