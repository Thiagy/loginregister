import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import "./LoginRegister.css";

const LoginRegister = () => {
    // Estado para controlar a posição da barra
    const [isLogin, setIsLogin] = useState(true);

    // Função para alternar entre login e registro
    const handleLoginRegister = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="wrapper">
            <div className="barRegisterLogin" style={{ left: isLogin ? '0%' : '-100%' }}>
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required/>
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className="icon"/>
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox"/>
                                Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={handleLoginRegister}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required/>
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required/>
                            <FaEnvelope className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <FaLock className="icon"/>
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox"/>
                                I agree to the terms & conditions
                            </label>
                        </div>

                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick={handleLoginRegister}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
