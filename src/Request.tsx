import { useRef } from 'react';
import RequestForm from './RequestForm';
import { Toast } from 'primereact/toast';

function Request() {
  const toast = useRef<Toast>(null);

  const callback = (data: any) => {
      console.log('form data', data)
      if (toast.current) {
         toast.current.show({ severity: 'success', summary: 'Envío', detail: 'SuccessFull.' });
      }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-700 mb-2">
                Solicitar una demostración
            </h1>
            <Toast ref={toast} />

            <p className='text-sm mb-4'>
              Rellene el siguiente formulario y nuestro equipo de ventas se pondrá en contacto con usted en breve.
            </p>

            <RequestForm callback={callback}/>
        </div>
    </div>
  )
}

export default Request
