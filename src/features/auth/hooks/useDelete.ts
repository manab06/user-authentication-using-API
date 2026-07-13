
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { ROUTES } from "../../../config/routs";
import { deleteProfile } from "../API/deleteProfile";
import { UserProfile } from "../API/getProfile";


export const useDelete = ()=>{
    const navigate = useNavigate();
    const {logout} = useAuthStore();
    const id = useAuthStore((state)=>state.id)

    const onSubmitDelete = async ()=>{
        if(!id) return;

        const success = await deleteProfile(String(id));

        if(!success){
            throw new Error("Failed to delete account");
        } 

        logout();
        //here will navigate to the delete account page after successful deletion
        navigate(ROUTES.PRIVATE.DELETE_ACCOUNT);

        
        // hold pahe for 5 seconds logic will be in the DeleteAccountDetails component
    }

    

    return {onSubmitDelete}; 


}