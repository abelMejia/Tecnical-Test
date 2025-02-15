
'use client';

import NavigationBar from "./components/NavigationBar";
import Request from "./components/Request";
import { toast } from "react-toastify";

export default function Home() {
  // toast.success("✅ ¡Operación exitosa!");
  const callback = (data: any) => {
    console.log('data', data);
    toast.success("✅ ¡Operación exitosa!");
  }

  return (
    <div className="h-screen flex flex-col light">
        {<NavigationBar />}
        <div className={
          `flex items-center justify-center min-h-screen dark:bg-gray-950 bg-gray-50 max-h-screen overflow-y-auto`
        }>
            <Request callback={callback}/>
        </div>
    </div>
  );
}
