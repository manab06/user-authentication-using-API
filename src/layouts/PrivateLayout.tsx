import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/store";
import { ROUTES } from "../config/routs";

export const PrivateLayout = () => {
  const navigate = useNavigate();

  const { name, avatar, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.PUBLIC.LOGIN);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-4">
          {avatar && (
            <img
              src={avatar}
              alt={name ?? "User"}
              className="w-10 h-10 rounded-full"
            />
          )}

          <span className="font-medium">{name}</span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

     
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};
