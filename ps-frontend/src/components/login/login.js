import React, { useRef, useContext } from "react";
import './login.css';
import AuthContext from "../../context/auth-context";

let Login = function () {
    const authCtx = useContext(AuthContext);

    const passwordRef = useRef();
    const usernameRef = useRef()

    //VALIDATION
    //LOGIN REQUEST
    //SEND TOKEN TO CONTEXT
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value);
        authCtx.onLogin(usernameRef.current.value, passwordRef.current.value);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" ref={usernameRef} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

export default Login;