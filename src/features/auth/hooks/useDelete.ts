
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { ROUTES } from "../../../config/routs";
import { deleteProfile } from "../API/deleteProfile";
import { UserProfile } from "../API/getProfile";
import { toast } from 'react-toastify';


export const useDelete = () => {
  const { logout } = useAuthStore();
  const id = useAuthStore((state) => state.id);

  const onSubmitDelete = async () => {
    if (!id) {
      throw new Error("User ID not found");
    }

    const success = await deleteProfile(String(id));

    if (!success) {
      throw new Error("Failed to delete account");
    }

    logout();
  };

  return { onSubmitDelete };
};


