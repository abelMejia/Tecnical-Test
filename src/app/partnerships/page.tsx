import NavigationBar from "../components/NavigationBar";

export default function PartnerShips() {
  return <div className="h-screen flex flex-col light">
      {<NavigationBar />}
      <div className={
        `flex items-center bg-gray-200 justify-center min-h-screen dark:bg-gray-950  max-h-screen overflow-y-auto`
      }>

          <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                </svg>
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>

      </div>
    </div>
}
