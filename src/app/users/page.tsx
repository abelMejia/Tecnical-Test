import NavigationBar from "../components/NavigationBar";

const people = [
  {
    name: "John Doe",
    email: "john@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default function Users() {

    return <div className="h-screen flex flex-col light">
        {<NavigationBar />}
        <div className={
          `flex items-center bg-gray-200 justify-center min-h-screen dark:bg-gray-950  max-h-screen overflow-y-auto`
        }>
            <ul role="list" className="
              bg-gray-100 shadow-2xl divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 p-8"
            >
              {people.map((person, index) => (
                <li
                  key={index}
                  className="flex items-center py-4 px-4 sm:px-6 first:pt-0 last:pb-0 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                    loading="lazy"
                    aria-label={`Foto de perfil de ${person.name}`}
                  />
                  <div className="ml-4 overflow-hidden">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{person.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{person.email}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
    </div>
}
