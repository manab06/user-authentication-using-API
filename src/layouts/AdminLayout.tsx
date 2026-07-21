import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/store";
import { toast } from "react-toastify";


export function AdminLayout() {

    const navigate = useNavigate();

    const logout = useAuthStore(
        (state)=>state.logout
    );


    const handleAdminLogout = () => {
        
        try{

          logout();
          toast.success("Admin logout successful");
          navigate("/admin-login",{replace:true});
        }catch(error){
          toast.error("Error during logout. Please try again.");
        }

    };


    return (
         <div 
            className="
            min-h-screen
            bg-gradient-to-br
            from-sky-100
            via-blue-50
            to-cyan-100
            "
        >
            {/* Navbar */}
            <header
                className="
                sticky
                top-0
                z-50
                backdrop-blur-xl
                bg-white/70
                border-b
                border-white/40
                shadow-lg
                "
            >
                <div
                    className="
                    max-w-7xl
                    mx-auto
                    px-8
                    py-5
                    flex
                    justify-between
                    items-center
                    "
                >
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div
                            className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-600
                            to-cyan-500
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            "
                        >
                            <span className="text-3xl">
                                👨‍💼
                            </span>
                        </div>
                        <div>
                            <h1
                                className="
                                text-3xl
                                font-bold
                                bg-gradient-to-r
                                from-blue-700
                                to-cyan-500
                                bg-clip-text
                                text-transparent
                                "
                            >
                                Admin Panel
                            </h1>
                            <p className="text-sm text-gray-500">
                                Manage your application securely
                            </p>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center gap-5">

                        {/* Admin Badge */}
                        <div
                            className="
                            hidden
                            md:flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-blue-100
                            text-blue-700
                            font-medium
                            "
                        >
                            <span>
                                🟢
                            </span>
                            Admin Online
                        </div>
                        {/* Logout Button */}
                        <button
                            onClick={handleAdminLogout}
                            className="
                            px-6
                            py-3
                            rounded-xl
                            bg-gradient-to-r
                            from-red-500
                            to-pink-500
                            text-white
                            font-semibold
                            shadow-lg
                            hover:scale-105
                            hover:shadow-xl
                            transition-all
                            duration-300
                            "
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            {/* Page Content */}
            <main
                className="
                max-w-7xl
                mx-auto
                px-8
                py-8
                "
            >
                <Outlet/>
            </main>
        </div>
    )
}