import { Button } from "../../../components/UI/button/Button";
import { useAuthStore } from "../store/store";
import { useState, useEffect } from "react";
import { ContactDetails } from "../API/getContactDetails";
import { getContactDetails } from "../API/getContactDetails";
import { Send } from "lucide-react";
import { EmailButton } from "./EmailButton";
import { contactUserDelete } from "../API/contactUserDelete";
import { toast } from "react-toastify";
// // - import { motion, AnimatePresence } from "framer-motion";
// import { motion, AnimatePresence } from "motion/react";

export default function AdminDashBoard() {
  const [users, setUsers] = useState<ContactDetails[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ContactDetails | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userDetails = await getContactDetails();
        setUsers(userDetails); // Wrap the single user in an array
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
  if (!selectedUser) return;

  try {
    await toast.promise(contactUserDelete(selectedUser.id),{
      pending: "Deleting user...",
      success: "User deleted successfully!",
      error: "Failed to delete user.",  

    })

    // Remove user from table immediately
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== selectedUser.id)
    );

    // Close modal
    setIsDeleteModalOpen(false);
    setSelectedUser(null);

  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="mx-auto max-w-7xl flex justify-between items-center px-8 py-5">
            <h1 className="text-3xl font-bold text-indigo-600">
              Admin Dashboard
            </h1>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-semibold">Welcome Admin</p>

                <p className="text-sm text-gray-500">admin@gmail.com</p>
              </div>

              <img
                src="https://i.pravatar.cc/100"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-8">
          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">Total Users</h3>

              <h1 className="text-4xl font-bold mt-2">{users.length}</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">Admins</h3>

              <h1 className="text-4xl font-bold mt-2">2</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">Active Users</h3>

              <h1 className="text-4xl font-bold mt-2">{users.length - 1}</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">New Today</h3>

              <h1 className="text-4xl font-bold mt-2">
                {Math.floor(users.length - (users.length - 6))}
              </h1>
            </div>
          </div>

          {/* User Table */}

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="px-8 py-6 border-b">
              <h2 className="text-2xl font-bold">Registered Users</h2>
            </div>

            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-4">Avatar</th>

                  <th className="text-left">Name</th>

                  <th className="text-left">Email</th>

                  <th className="text-left">Role</th>

                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <img
                        src={user.avatar}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </td>

                    <td className="font-semibold">{user.name}</td>

                    <td>{user.email}</td>

                    <td>
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-medium ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td>
                      <div className="flex justify-center gap-3">
                        <EmailButton />
                        <Button
                          onClick={() => {
                            setSelectedUser(user);
                            setIsDeleteModalOpen(true);
                          }}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {isDeleteModalOpen && selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
              {/* Icon */}

              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
              </div>

              {/* Heading */}

              <h2 className="text-2xl font-bold text-center text-gray-800">
                Delete User?
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Are you sure you want to delete this user?
              </p>

              {/* User information */}

              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 mt-6">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {selectedUser.name}
                  </h3>

                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>

              <p className="text-sm text-red-500 text-center mt-5">
                This action cannot be undone.
              </p>

              {/* Buttons */}

              <div className="flex gap-3 mt-7">
                <Button
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedUser(null);
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 text-white hover:bg-red-600"
                >
                  Confirm Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
