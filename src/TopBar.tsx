import './App.css'
import { Menubar } from 'primereact/menubar';

function TopBar() {

  const items = [
    {
        label: 'Soluciones',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Opción 1',
            },
            {
                label: 'Opción 2',
            }
        ]
    },
    {
        label: 'Alianzas',
        icon: 'pi pi-home'
    },
    {
        label: 'Compañía',
        icon: 'pi pi-star'
    },
    {
        label: 'Comunidad',
        icon: 'pi pi-envelope'
    }
  ];

  return (
    <div className="h-20 bg-gray-50 text-black flex items-center rounded-xl shadow-lg px-4 top-bar">

        <div className="flex items-center gap-3 w-16 rounded-full">
          <img
              src="https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg"
              alt="Logo"
              className="w-full h-auto rounded-full" />
        </div>

        <div className='hidden md:block'>Consultores</div>

        <div className="flex items-center justify-between gap-6 w-80 flex-grow">
            <div className="flex items-center rounded-full px-4 py-2">
                <Menubar model={items} />
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <button
                  className="p-2 h-10 w-10 rounded-full hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-300"
                  aria-label="Toggle Dark Mode"
                >
                  <i className="pi pi-moon text-lg text-gray-600 dark:text-gray-300"></i>
                </button>

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 justify-end"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-700">Abel Mejia</p>
                  <p className="text-xs text-gray-500">Web Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar
