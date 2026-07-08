import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    // <div className="w-full min-h-screen bg-gray-200 flex">
    //   <aside className="w-80 bg-white shadow-md p-5">
    //     <h1 className="text-2xl font-bold">
    //       My App
    //     </h1>
    //   </aside>

    //   <main className="flex-1 flex items-center justify-center">
    //     <Outlet />
    //   </main>
    // </div>

     <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 text-white shadow-2xl flex flex-col">
        {/* Logo */}
        <div className="p-8 border-b border-white/20">
          <h1 className="text-3xl font-bold tracking-wide">
            🚀 My App
          </h1>
          <p className="text-sm text-sky-100 mt-2">
            Admin Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-3">
            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
                🏠 Dashboard
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
                👤 Users
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
                📊 Reports
              </button>
            </li>

            <li>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
                ⚙️ Settings
              </button>
            </li>
          </ul>
        </nav>

        {/* User Card */}
        <div className="p-6 border-t border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white text-sky-700 flex items-center justify-center text-xl font-bold">
              M
            </div>

            <div>
              <p className="font-semibold">Mohit</p>
              <p className="text-xs text-sky-100">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-8 py-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-700">
            Dashboard
          </h2>

          <button className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition">
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[500px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}