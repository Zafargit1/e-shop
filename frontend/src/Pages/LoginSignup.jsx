import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
import { backend_url } from '../App';

const LoginSignup = () => {
    
    const [state, setState] = useState("Log in")
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const login = async()=>{
        console.log("Login function executed", formData)
        let responseData;
        await fetch(`${backend_url}/login`, { 
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/") // Redirect to home page after successful signup
        }else{
            alert(responseData.errors) // Show error message if signup fails
        }
    }

    const signup = async()=>{
        console.log("Signup function executed", formData)
        let responseData;
        await fetch(`${backend_url}/signup`, { 
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/") // Redirect to home page after successful signup
        }else{
            alert(responseData.errors) // Show error message if signup fails
        }
    }
    
    return(
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={()=>{state==="Log in"?login():signup()}}>Continue</button>
                {state==="Sign Up" 
                ?<p className='loginsignup-login'>Already have an account <span onClick={() => setState("Login")}>Login here...</span></p>
                :<p className='loginsignup-login'>Create an account? <span onClick={() => setState("Sign Up")}>Sign Up here...</span></p>}
                
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing I agree I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;