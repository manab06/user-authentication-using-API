
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { ROUTES } from "../../../config/routs";
import { deleteProfile } from "../API/deleteProfile";

export const useDelete = ()=>{
    const navigate = useNavigate();
    const {logout} = useAuthStore();
    const id = useAuthStore((state)=>state.id)

    const onSubmitDelete = async ()=>{
        await deleteProfile(userId);
        logout();
        navigate(ROUTES.PUBLIC.LOGIN);
    }


}