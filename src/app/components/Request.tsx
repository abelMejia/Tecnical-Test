'use client';

import RequestForm from "./RequestForm";

function Request({ callback }: { callback: (data: any) => void }) {
    return (
      <div className="shadow-2xl bg-white dark:bg-gray-900  rounded-lg p-8 w-full max-w-md">

            <h1 className="text-2xl font-semibold text-gray-700 mb-2 dark:text-white">
                Solicitar una demostración
            </h1>

            <p className='text-sm mb-4 dark:text-white'>
              Rellene el siguiente formulario y nuestro equipo de ventas se pondrá en contacto con usted en breve.
            </p>

            <RequestForm callback={callback}/>

      </div>
    );
}

export default Request;
