import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ISuccess, IError, IUser } from "../../shared/types/types";
import "./RegisterPage.css";

interface IForm {
    username: string
    email: string
    password: string
}

export function RegisterPage() {
    const {register: register, handleSubmit, formState} = useForm <IForm>({
        mode: 'onSubmit'
    })
        
    function onSubmit(data: IForm){
        console.log(data)
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