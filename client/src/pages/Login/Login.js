import React, { useState } from 'react'
import "./Login.css"


const Login = () => {

    const [action,setAction] = useState("Login")

  return (
    <div className="login-container">
       <div className='login-header'>
        <div className='login-text'>{action}</div>
        <div className='login-underline'></div>
       </div>
       <div className='login-inputs'>
        {action==="Login"?<div></div>: <div className='login-input'>
            <input type='text' placeholder='Name'></input>
          </div>}
         
          <div className='login-input'>
            <input type='email' placeholder='Email Id'></input>
          </div>
          <div className='login-input'>
            <input type='password' placeholder='Password'></input>
          </div>
       </div>
       {action=="Sign Up"?<div></div> : <div className='login-forgot-password'>Forgot Password? <span>click here</span></div> }
           <div className='login-submit-container'>
            <div className={action==="Login"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Login")}}>Login</div>
           </div>
        </div>
  )
}

export default Login