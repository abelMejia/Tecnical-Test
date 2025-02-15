import './App.css'
import TopBar from './TopBar';
import Request from './Request';


function Layout() {

  return (
    <div className="h-screen flex flex-col">
        <TopBar />

        <div className="flex flex-1">
            <div
                className="flex-1 bg-gray-200 overflow-auto justify-center"
                style={{
                    padding: '1.5rem',
                    height: 'calc(100vh - 5rem)'
                }}
            >
                <Request />
            </div>
        </div>

   </div>
  )
}

export default Layout
