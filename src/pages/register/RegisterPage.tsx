
import { Name } from '../../components/UI/name/Name'
import { Email } from '../../components/UI/email/Email'
import { Button } from '../../components/UI/button/Button'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../features/auth/store/store';
import { AuthData } from '../../features/auth/schema/register/Auth';
import { ROUTES } from '../../config/routs';
import { createUser } from '../../features/auth/API/createUserApi';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authData } from "../../features/auth/schema/register/Auth";
import { Password } from '../../components/UI/Password/Password';
import { Avatar } from '../../components/UI/Avatar/Avatar';
import { useRedirectToHomepage } from '../../features/auth/hooks/useRedirectToHomepage';






export function RegisterPage() {
  const navigate = useNavigate();

  const goToLoginPage = ()=>{
    navigate(ROUTES.PUBLIC.LOGIN);
  }

  const {
    register,
    handleSubmit,
  } = useForm<AuthData>({ resolver: zodResolver(authData), });


  const { setAuth } = useAuthStore();

  const onSubmit = async (data: AuthData) => {
    try {
      const response = await createUser(data);

      setAuth(
        response.name,
        response.email,
        response.password,
        response.avatar
      );

      navigate(ROUTES.PUBLIC.SUCCESS);
      useRedirectToHomepage()
    } catch (errors) {
      console.error(errors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-screen h-screen bg-gray-500 flex items-center justify-center">

          <div className="w-full max-w-md p-6 bg-yellow-500 rounded-lg shadow-md flex flex-col gap-4">

            <h1 className="text-xl font-bold text-gray-800">Please Enter your Name</h1>
            <Name register={register} />
           

            <h1 className="text-xl font-bold text-gray-800">Please Enter your Email</h1>
            <Email register={register} />
            <Password register={register} />
            <Avatar register={register} />


            <Button type='submit'>Register</Button>
            <Button onClick={goToLoginPage}>Go to Login</Button>

          </div>
        </div>
      </form>

    </>
  )
}

