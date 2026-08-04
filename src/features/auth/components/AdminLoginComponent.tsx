import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/store";



export default function AdminLoginComponent() {
    const navigate = useNavigate();

    const admin_email = "admin@example.com";
    const admin_password = "admin123";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const setAdminLogin = useAuthStore(
        (state) => state.setAdminLogin
    );

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        
        if (email === admin_email && password === admin_password) {
            toast.success("Admin login successful!");
            setAdminLogin();
            navigate("/adashboard", {replace: true});
        } else {
            toast.error("Invalid admin credentials. Please try again.");
        }
        console.log("Email:", email);
        console.log("Password:", password);
    };



  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 items-center justify-center p-12">

        <div className="text-white max-w-md">

          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-semibold mb-6">
            ADMIN PORTAL
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back,
            <br />
            Administrator
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Securely manage users, monitor activity, and control your
            application from one centralized dashboard.
          </p>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-8">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">

              <span className="text-4xl">👨‍💼</span>

            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-800">
              Admin Login
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to access the admin dashboard
            </p>

          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={()=>setShowPassword(!showPassword)}
                
               
              />

            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-gray-600">

                <input
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)} 
                  type="checkbox"
                  className="rounded"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}


