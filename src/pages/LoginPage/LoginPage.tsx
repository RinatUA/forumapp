import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useUserContext } from "../../context/userContext"

interface ILoginForm {
    email: string;
    password: string;
}

export function LoginPage(){
    const {login} = useUserContext()
    const {register, handleSubmit, formState} = useForm <ILoginForm>({
        mode: 'onSubmit'
    })
    
    function onSubmit(data: ILoginForm){
        console.log(data)
        login(data.email, data.password)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <input type="text" {...register('email', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 100, message: 'This field should be less than 100 symbols'}, })} />
                <p>{formState.errors.email?.message}</p>

                <input type="password" {...register('password', {
                    required: {value: true, message: 'Field is required'}, 
                    minLength: {value: 7, message: 'This field should be more than 7 symbols'}, 
                    maxLength: {value: 20, message: 'This field should be less than 20 symbols'}, })} />
                <p>{formState.errors.password?.message}</p>

                <button type="submit">Submit</button>
                <p className="registerText">Don't have an account? <Link id="registerLinkButton" to="/register">Sign Up</Link></p>
            </form>
        </div>
    )
}