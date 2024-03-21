import React from 'react'
import "./Login.scss"


const Login = () => {
  return (
    <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    className="lInput"
                />
                              <button  className="lButton">
                    Login
                </button>
            </div>
        </div>
  )
}

export default Login