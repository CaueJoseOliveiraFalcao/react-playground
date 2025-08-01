import Input from "../components/Input";


export default function Register() {
    return(
        <>
        <h1>Register</h1>
        <form>
            <Input label="Email"/>
            <Input label='Password'/>
            <Input label='Confirm Password'/>
        </form>
        </>
    ) 
} 