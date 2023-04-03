import React, { useState } from "react";
import './login.css';

let Login = function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input value={username} type="text" placeholder="Example" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

export default Login;