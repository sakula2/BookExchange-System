import React from 'react';
import './register.css'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
    // const { name, email, password, reEnterPassword } = user
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
    const navigate = useNavigate();
    
    const handleChange = (e) =>{
        e.preventDefault();
        // console.log(e)
        const {name, value} = e.target
        // console.log(name, value)
        setUser({
            ...user, 
            [name] : value
        })
        // console.log(user)
    }
    const register = (e) => {
        e.preventDefault()
        const { name, email, password, reEnterPassword } = user

        const base_url="http://localhost:8080/register"

        if( name && email && password && (password === reEnterPassword)){
            axios.post(base_url, user, { mode: 'cors' })
            .then( res => {
                alert(res.data.message)
                console.log(res.data)
                // navigate.push("/login")
                // history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

return (
    <div className="register">
    
        {console.log("User", user)}
        <h1>Register</h1>
        <input type="text" name="name" value = {user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value = {user.email} placeholder="Your Email" onChange={handleChange}></input>
        <input type="password" name="password" value = {user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
       <div className="button" onClick={register} >Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
    </div>
)
}
export default Register;
