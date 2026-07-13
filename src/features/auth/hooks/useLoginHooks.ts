
import { useForm } from "react-hook-form";
import { ROUTES } from '../../../config/routs';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { authDataForLogIn, AuthDataForLogin } from '../schema/login/logisSchema';
import { useAuthStore } from "../store/store";

import { loginUser } from "../API/loginApi";
import { getProfile } from "../API/getProfile";





export  function useLoginHooks() {
    const navigate = useNavigate();

    const {setLogin} = useAuthStore();

    const loginform = useForm<AuthDataForLogin>({
        resolver: zodResolver(authDataForLogIn),
    });

    const backToRegisterpage = () => {
        navigate(ROUTES.PUBLIC.HOME);
    };

    const onSubmitLogin = async (data: AuthDataForLogin) => {
        try{
            const loginResponse = await loginUser(data);
            useAuthStore.getState().setToken(loginResponse.access_token)
            const user = await getProfile();
            setLogin(user.id,user.name,user.email,user.avatar,loginResponse.access_token,loginResponse.refresh_token);
            navigate(ROUTES.PRIVATE.DASHBOARD);
        }   catch(error){
            console.log(error)
        }
    }; 
    return {
        ...loginform,onSubmitLogin,backToRegisterpage
    };
}

