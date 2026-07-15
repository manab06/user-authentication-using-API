
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
// import { useRedirectToHomepage } from '../../features/auth/hooks/useRedirectToHomepage';
import {  toast } from 'react-toastify';






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
        response.id,
        response.name,
        response.email,
        response.password,
        response.avatar
      );

      // navigate(ROUTES.PUBLIC.SUCCESS);
      // useRedirectToHomepage({navigate})

      toast.success("Register successfully!");

      navigate(ROUTES.PUBLIC.LOGIN);

    } catch (errors) {
      console.error(errors);
      toast.error("Registration failed. Please try again...regpage");
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
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
      </form> */}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4 py-10">
    <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-sky-100 p-8 md:p-10">

      
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-sky-600 flex items-center justify-center text-white text-3xl shadow-lg">
          👤
        </div>

        <h1 className="mt-5 text-3xl font-bold text-sky-700">
          Create Account
        </h1>

        <p className="mt-2 text-gray-500">
          Join us and start your journey today.
        </p>
      </div>

      
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <Name register={register} />
      </div>

      
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <Email register={register} />
      </div>

      
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Password
        </label>
        <Password register={register} />
      </div>

      
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Avatar URL
        </label>
        <Avatar register={register} />
      </div>

      
      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Create Account
        </Button>

        <Button
          type="button"
          onClick={goToLoginPage}
          className="w-full border border-sky-600 bg-white text-sky-600 hover:bg-sky-50 py-3 rounded-xl transition-all duration-300"
        >
          Already have an account? Login
        </Button>
      </div>

      
      <div className="mt-8 text-center text-sm text-gray-500">
        By creating an account, you agree to our{" "}
        <span className="text-sky-600 font-medium cursor-pointer hover:underline">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-sky-600 font-medium cursor-pointer hover:underline">
          Privacy Policy
        </span>.
      </div>
    </div>
  </div>
</form> */}

{/* <form onSubmit={handleSubmit(onSubmit)}>
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
    style={{
       backgroundImage: "url('/register-bg.jpg')",
    }}
  >
   
    <div className="absolute inset-0 bg-black/05"></div>
   

    
    <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 p-8 md:p-10">

      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-3xl shadow-lg">
          👤
        </div>

        <h1 className="mt-5 text-3xl font-bold text-sky-700">
          Create Account
        </h1>

        <p className="mt-2 text-gray-600">
          Create your account to continue.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Full Name
          </label>
          <Name register={register} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Email
          </label>
          <Email register={register} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Password
          </label>
          <Password register={register} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Avatar URL
          </label>
          <Avatar register={register} />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <Button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700"
        >
          Register
        </Button>

        <Button
          type="button"
          onClick={goToLoginPage}
          className="w-full bg-white border border-sky-600 text-sky-600 hover:bg-sky-50"
        >
          Login Instead
        </Button>
      </div>
    </div>
  </div>
</form> */}


<form onSubmit={handleSubmit(onSubmit)}>
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10"
    style={{
      backgroundImage: "url('/register-bg.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10"></div>

    <div className="relative w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Side Image */}
    <div className="hidden lg:block h-full">
  <img
    src="https://www.justwords.in/wp-content/uploads/2021/04/free-stock-photos-websites.jpg"
    alt="Illustration"
    className="w-full h-full object-cover rounded-3xl shadow-2xl"
  />
</div>

{/* Right Side Register Card */}
<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10">
  {/* Register Form */}


        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white text-3xl shadow-lg">
            👤
          </div>

          <h1 className="mt-5 text-3xl font-bold text-sky-700">
            Create Account
          </h1>

          <p className="mt-2 text-gray-600">
            Create your account to continue.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <Name register={register} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>
            <Email register={register} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
            
            </label>
            <Password register={register} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              
            </label>
            <Avatar register={register} />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700"
          >
            Register
          </Button>

          <Button
            type="button"
            onClick={goToLoginPage}
            className="w-full bg-white border border-sky-600 text-sky-600 hover:bg-sky-50"
          >
            Login
          </Button>
        </div>

      </div>

    </div>
  </div>
</form>


    </>
  )
}

