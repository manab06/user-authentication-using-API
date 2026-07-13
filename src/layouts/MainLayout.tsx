import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../config/routs";

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

    //  <div className="min-h-screen flex bg-gray-100">
    //   {/* Sidebar */}
    //   <aside className="w-72 bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 text-white shadow-2xl flex flex-col">
    //     {/* Logo */}
    //     <div className="p-8 border-b border-white/20">
    //       <h1 className="text-3xl font-bold tracking-wide">
    //         🚀 My App
    //       </h1>
    //       <p className="text-sm text-sky-100 mt-2">
    //         Admin Dashboard
    //       </p>
    //     </div>

    //     {/* Navigation */}
    //     <nav className="flex-1 p-6">
    //       <ul className="space-y-3">
    //         <li>
    //           <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
    //             🏠 Dashboard
    //           </button>
    //         </li>

    //         <li>
    //           <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
    //             👤 Users
    //           </button>
    //         </li>

    //         <li>
    //           <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
    //             📊 Reports
    //           </button>
    //         </li>

    //         <li>
    //           <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition duration-300">
    //             ⚙️ Settings
    //           </button>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* User Card */}
    //     <div className="p-6 border-t border-white/20">
    //       <div className="flex items-center gap-3">
    //         <div className="w-12 h-12 rounded-full bg-white text-sky-700 flex items-center justify-center text-xl font-bold">
    //           M
    //         </div>

    //         <div>
    //           <p className="font-semibold">Mohit</p>
    //           <p className="text-xs text-sky-100">
    //             Administrator
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </aside>

    //   {/* Content */}
    //   <div className="flex-1 flex flex-col">
    //     {/* Header */}
    //     <header className="bg-white shadow px-8 py-5 flex items-center justify-between">
    //       <h2 className="text-2xl font-bold text-gray-700">
    //         Dashboard
    //       </h2>

    //       <button className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition">
    //         Logout
    //       </button>
    //     </header>

    //     {/* Main Content */}
    //     <main className="flex-1 p-8 overflow-auto">
    //       <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[500px]">
    //         <Outlet />
    //       </div>
    //     </main>
    //   </div>
    // </div>

    
   //<div className="min-h-screen flex flex-col"
  // style={{
  //   backgroundImage:
  //     "url('https://i.pinimg.com/736x/af/7a/d9/af7ad9d78541934d35f9e373f16d2ee9.jpg')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // }}>

  <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
              M
            </div>

            <div>
              <h1 className="text-2xl font-bold text-sky-700">
                MyApp
              </h1>

              <p className="text-xs text-gray-500">
                Simple & Secure
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-sky-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-sky-600 transition"
            >
              About Us
            </Link>

            <Link
              to="/features"
              className="hover:text-sky-600 transition"
            >
              Features
            </Link>

            <Link
              to="/contact"
              className="hover:text-sky-600 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to={ROUTES.PUBLIC.LOGIN}
              className="px-5 py-2 rounded-lg border border-sky-600 text-sky-600 hover:bg-sky-50 transition"
            >
              Login
            </Link>

            <Link
              to={ROUTES.PUBLIC.HOME}
              className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow-lg transition"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* ================= Hero Background ================= */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-200/30 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

        {/* Form Card */}
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 p-10">
          <Outlet />
        </div>
      </main>

      {/* ================= Footer ================= */}
      <footer className="bg-sky-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              MyApp
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              A modern platform built with React,
              TypeScript and Tailwind CSS to provide
              a clean and secure experience.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-sky-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-sky-300">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/features" className="hover:text-sky-300">
                  Features
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-sky-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Account
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to={ROUTES.PUBLIC.LOGIN}
                  className="hover:text-sky-300"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to={ROUTES.PUBLIC.HOME}
                  className="hover:text-sky-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Contact
            </h3>

            <p className="text-sm">support@myapp.com</p>
            <p className="text-sm mt-2">+91 98765 43210</p>

            <div className="flex gap-4 mt-5 text-xl">
              <span>🌐</span>
              <span>📘</span>
              <span>📷</span>
              <span>💼</span>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 py-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}