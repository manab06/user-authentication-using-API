import React from 'react'
import { Button } from '../../../components/UI/button/Button';

export function AdminComponent() {
    return (
        <>
         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-700 to-blue-700 text-white p-12">

          <div className="text-7xl mb-6">🛡️</div>

          <h1 className="text-4xl font-bold mb-4">
            Admin Portal
          </h1>

          <p className="text-lg text-indigo-100 leading-8">
            Secure access for administrators.
            <br />
            Manage users, roles, and system settings from one place.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>User Management</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>Create New Admin</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✔</span>
              <p>Role Based Access</p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 md:p-14">

          <div className="text-center mb-8">

            <div className="text-5xl mb-4">
              👨‍💼
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Admin Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to continue
            </p>

          </div>

          <form className="space-y-6">

            <input
              label="Email Address"
              type="email"
              placeholder="admin@example.com"
            />

            <input
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <div className="pt-2">
              <Button className="w-full">
                Login as Admin
              </Button>
            </div>

          </form>

          <div className="mt-10 border-t pt-6">

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Create New Admin
            </h3>

            <div className="space-y-5">

              <input
                label="Full Name"
                placeholder="John Doe"
              />

              <input
                label="Email"
                type="email"
                placeholder="john@example.com"
              />

              <input
                label="Password"
                type="password"
                placeholder="********"
              />

              <input
                label="Avatar URL"
                placeholder="https://example.com/avatar.png"
              />

              <input
                label="Role"
                value="admin"
                disabled
              />

              <Button className="w-full">
                Create Admin
              </Button>

            </div>

          </div>

        </div>

      </div>
    </div>
            
        </>
    )
}
