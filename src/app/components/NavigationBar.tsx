'use client';

import Menu from "./Menu";
import Avatar from "./Avatar";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

function NavigationBar() {
  const {theme, setTheme} = useTheme();

  return  <nav className="sticky top-0 shadow-2xl w-full z-50 bg-gray-50 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"
                    alt="Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="hidden md:block text-lg font-semibold text-gray-900 dark:text-white">
                    Consultores
                  </span>

                  <Menu />
              </div>

              <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                      <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                  </button>

                  <Avatar />

              </div>

          </div>
      </div>
  </nav>
}

export default NavigationBar;
