import React from 'react'
import { useState } from "react";


const Register = () => {
    const[username, setUsername] = useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="lContainer">
       
        <input
          type="text"
          value={username}
          onChange = {(e)=> setUsername(e.target.value)}
          placeholder="username"
          id="username"
         
          className="lInput"
        />
        <input
        type="text"
        placeholder="email"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
       
        className="lInput"
      />
      
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e)=> setPassword(e.target.password)}
          className="lInput"
        />

          <input
          type="password"
          placeholder="Conform password"
          id="password"
          value={""}
          onChange={(e)=> setPassword(e.target.password)}
          className="lInput"
        />  
        <button  className="lButton">
          Register
        </button>
       
      </div>
    </div>
  )
}

export default Register