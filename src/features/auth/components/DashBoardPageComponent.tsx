import { useEffect, useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { DeleteAccountDetails } from "../components/DeleteAccountDetails";
import { useAuthStore } from "../store/store";
import { updateUserProfile } from "../API/updateUserProfile";
import { toast } from "react-toastify";

export function DashBoardPageComponent() {
  // Delete modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Update modal
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);

  // Update form state
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateAvatar, setUpdateAvatar] = useState("");

  // Zustand data
  const { id,name, email, avatar,password,role,setUser } = useAuthStore();

  // Put current user data into form when modal opens


  useEffect(() => {
    if (isUpdateOpen) {
      setUpdateName(name || "");
      setUpdateEmail(email || "");
      setUpdateAvatar(avatar || "");
    }
  }, [isUpdateOpen, name, email, avatar]);

 //.............UPDATE_USER LOGIC.................

  const handleUpdate = async () => {

     if(!id) {
     toast.error("User ID not found");
    return;
    }

// Check whether anything actually changed.....................
  const hasChanges =
    updateName !== (name || "") ||
    updateEmail !== (email || "") ||
    updateAvatar !== (avatar || "");

  if (!hasChanges) {
    toast.info("You haven't changed anything.");
    return;
  }

//.................................................
    const updatedData = {
      name: updateName,
      email: updateEmail,
      avatar: updateAvatar,
     
    };
    // api call will come here later here
    try {

      const response = await toast.promise(updateUserProfile(id, updatedData),
       {
        pending: "Updating profile...",
        success: "Profile updated successfully!",
        error: "Failed to update profile. Please try again.",
       });
      
      
      // update zustand store with api response new data...

      setUser(
        response.id,
        response.name,
        response.email,
        response.avatar,
        
      );

      setIsUpdateOpen(false);
    
      console.log("Updated data:", response);

    } catch (error) {
      console.error("Error updating user profile:", error);
      // toast.error("Failed to update profile. Please try again.");
    }
    console.log("Updated data:", updatedData);

  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* ================= MY DETAILS ================= */}

      <h2 className="text-2xl font-bold mb-6">
        My Details
      </h2>

      <div className="bg-white shadow rounded-xl p-6 flex gap-6">
        <img
          src={avatar || "https://via.placeholder.com/100"}
          alt={name ?? ""}
          className="w-24 h-24 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p>{email}</p>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}

      <div className="mt-6 flex gap-4">
        <Button
          onClick={() => setIsUpdateOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Update Account
        </Button>

        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Delete Account
        </Button>
      </div>

      {/* ================= UPDATE MODAL ================= */}

      {isUpdateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">

            {/* Modal Header */}

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Update Account
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Update your profile information
                </p>
              </div>

              <button
                onClick={() => setIsUpdateOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl"
              >
                ×
              </button>
            </div>

            {/* ================= AVATAR PREVIEW ================= */}

            <div className="flex justify-center mb-6">
              <img
                src={
                  updateAvatar ||
                  "https://via.placeholder.com/100"
                }
                alt={updateName}
                className="w-28 h-28 rounded-full object-cover border-4 border-sky-100 shadow-lg"
              />
            </div>

            {/* ================= NAME ================= */}

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* ================= EMAIL ================= */}

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* ================= AVATAR URL ================= */}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Avatar URL
              </label>

              <input
                type="text"
                value={updateAvatar}
                onChange={(e) => setUpdateAvatar(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* ================= ACTION BUTTONS ================= */}

            <div className="flex justify-end gap-3">

              <Button
                onClick={() => setIsUpdateOpen(false)}
                className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-400 hover:to-red-600 text-white"
              >
                Cancel
              </Button>

              <Button
                onClick={handleUpdate}
                className="bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-cyan-500 hover:to-sky-600 text-white"
              >
                Save Changes
              </Button>

            </div>
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}

      <DeleteAccountDetails
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}