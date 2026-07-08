
import { Button } from '../../../../components/UI/button/Button';
import { Email } from '../../../../components/UI/email/Email';
import { Password } from '../../../../components/UI/Password/Password';
import { useLoginHooks } from '../../hooks/useLoginHooks';

export function LoginComponent() {
    const { register, handleSubmit,onSubmitLogin,backToRegisterpage} = useLoginHooks();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                
                <div className="w-full h-screen bg-white/50 flex items-center justify-center">
                    <div className="bg-white shadow-xl rounded-lg p-6 w-96">
                        <h1>Login page</h1>
                        <Email register={register}/>
                        <Password register={register} />
                        {/* {error && <span>{error.message}</span>} */}
                        

                        <div className="flex gap-4 mt-4">
                            <Button className="w-40 h-12" type="submit">Login</Button>
                            <Button className="w-40 h-12" type="button" onClick={backToRegisterpage}>Register</Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}


