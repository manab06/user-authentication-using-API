// import React from 'react'
// import { Button } from '../../../../components/UI/button/Button'
// import { useAuthStore} from '../../store/store'
// // import { useRedirectToHomepage } from "../../hooks/useRedirectToHomepage"




// export function SuccessFullComponent() {

//   const name = useAuthStore((state) => state.name);
//   const email = useAuthStore((state) => state.email)

//  const redirect = useRedirectToHomepage();

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100 flex items-center justify-center px-4">

//   <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

//     {/* Top Banner */}
//     <div className="bg-gradient-to-r from-sky-600 to-cyan-500 py-10 flex flex-col items-center">

//       <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl">
//         <span className="text-5xl">✅</span>
//       </div>

//       <h1 className="mt-6 text-4xl font-bold text-white">
//         Registration Successful!
//       </h1>

//       <p className="mt-2 text-sky-100 text-lg">
//         Welcome to MyApp
//       </p>

//     </div>

//     {/* Body */}
//     <div className="p-10">

//       <div className="text-center">

//         <h2 className="text-2xl font-semibold text-gray-800">
//           Congratulations,{" "}
//           <span className="text-sky-600">
//             {name}
//           </span>
//           🎉
//         </h2>

//         <p className="mt-4 text-gray-600">
//           Your account has been created successfully.
//         </p>

//       </div>

//       {/* User Details */}
//       <div className="mt-10 space-y-5">

//         <div className="flex items-center justify-between bg-sky-50 rounded-xl p-4">

//           <span className="font-semibold text-gray-700">
//             Full Name
//           </span>

//           <span className="text-sky-700 font-medium">
//             {name}
//           </span>

//         </div>

//         <div className="flex items-center justify-between bg-sky-50 rounded-xl p-4">

//           <span className="font-semibold text-gray-700">
//             Email
//           </span>

//           <span className="text-sky-700 font-medium break-all">
//             {email}
//           </span>

//         </div>

//       </div>

//       {/* Countdown */}
//       <div className="mt-10 text-center">

//         <div className="w-20 h-20 mx-auto rounded-full bg-sky-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
//           {}
//         </div>

//         <p className="mt-5 text-gray-600">
//           You will be redirected to the login page in
//         </p>

//         <p className="mt-2 text-2xl font-bold text-sky-600">
//           {/* {counts} second{counts !== 1 ? "s" : ""} */}
//         </p>

//       </div>

//       {/* Footer */}
//       <div className="mt-12 border-t pt-6 text-center text-gray-500 text-sm">
//         Thank you for choosing <span className="font-semibold text-sky-600">MyApp</span>.
//         We're excited to have you with us!
//       </div>

//     </div>

//   </div>

// </div>
//     </>
//   )
// }