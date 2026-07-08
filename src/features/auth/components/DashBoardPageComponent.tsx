import React from 'react'
import { useAuthStore } from '../store/store'
import { Button } from '../../../components/UI/button/Button';



export function DashBoardPageComponent() {
    const { name, email,avatar} = useAuthStore();
    return (
        <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Details</h2>

      <div className="bg-white rounded-2xl shadow-md p-8 flex items-center gap-6">
        <img
          src={avatar || "https://via.placeholder.com/96"}
          alt={name ?? "User avatar"}
          className="w-24 h-24 rounded-full object-cover border-4 border-sky-100"
        />

        <div>
          <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-sky-50 rounded-xl p-4">
          <p className="text-sm text-sky-600 font-medium">Name</p>
          <p className="text-gray-800 font-semibold">{name}</p>
        </div>
        <div className="bg-sky-50 rounded-xl p-4">
          <p className="text-sm text-sky-600 font-medium">Email</p>
          <p className="text-gray-800 font-semibold">{email}</p>
        </div>
        <Button>Update Account</Button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200">
  Delete Acount
</button>
      </div>
    </div>
    )
}
