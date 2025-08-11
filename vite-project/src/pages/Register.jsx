import { useState } from "react";
import Input from "../components/Input";


export default function Register() {
    const [email , SetEmail] = useState('');
    const [password , SetPassword] = useState('')
    const [confirm , SetConfirm] = useState('');    ;    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const EmailChangeValue = (event) => {
        SetEmail(event.target.value);
    }
    const PasswordChangeValue = (event) => {
        SetPassword(event.target.value);
    }
    const ConfirmPasswordChangeValue = (event) => {
        SetConfirm(event.target.value);
    }
    return(
        <>
        <h1>Register</h1>
        <form style={{padding : '5px'}} onSubmit={handleSubmit}>
            <Input label='Email' value={email} onChange={EmailChangeValue}/>
            <Input label='Password' value={password} onChange={PasswordChangeValue}/>
            <Input label='Confirm Password' value={confirm} onChange={ConfirmPasswordChangeValue}/>
            <input type="submit" value="sd" />
        </form>
        </>
    ) 
} 