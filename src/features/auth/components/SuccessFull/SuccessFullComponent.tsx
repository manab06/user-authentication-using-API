import React from 'react'
import { Button } from '../../../../components/UI/button/Button'
import { useAuthStore} from '../../store/store'
import { useRedirectToHomepage } from "../../hooks/useRedirectToHomepage"




export function SuccessFullComponent() {
  // const reDirect = RedirectToHomepage();
  const name = useAuthStore((state) => state.name);
  const email = useAuthStore((state) => state.email)

 const redirect = useRedirectToHomepage();

  return (
    <>
      <div className="w-full min-h-screen bg-gray-500 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl p-8 rounded-lg shadow-lg">
        <div className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-white text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold tracking-wide">
              Congratulations!
            </h1>

            <h2>{name}</h2>

            <h2 className="text-lg font-medium text-gray-200">
              You successfully registered yourself.
            </h2>

            <h3>And your email is {email}</h3>
          </div>
            {/* <h2>you will back to home page in 5 sec{counts}</h2> */}
        </div>
      </div>

      <div className="mt-6">
         

      </div>
    </div>
      
    </>
  )
}