import React, { useState, useRef } from "react";
import './login.css';

let Login = function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const usernameRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value)
        setPassword(passwordRef.current.value)
        console.log(username, password);
        passwordRef.current.value = ""
        usernameRef.current.value = ""
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