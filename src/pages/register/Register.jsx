import axios from 'axios';
import React, { useRef } from 'react';
import "./register.css";
import { useHistory } from "react-router-dom";

function Register(props) {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const retypePass = useRef();
    const history = useHistory();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(retypePass.current.value !== password.current.value)
        {
            alert("Pass nhập lại k trùng khớp")
            // retypePass.current.setCustomValidity("Pass nhập lại không trùng");
        }
        else
        {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                const res = await axios.post("auth/register", user);
                history.push("/login");

            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Quang Social</h3>
                    <span className="registerDesc">
                        Đăng ký và trở thành thành viên của Quang Social đi các bạn !
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input className="registerInput" placeholder="Username" ref={username} required type="text"/>
                        
                        <input className="registerInput" placeholder="Email" ref={email} required type="email"/>
                        
                        <input className="registerInput" placeholder="Password" ref={password} required type="password"/>
                        
                        <input className="registerInput" placeholder="Retype Password" ref={retypePass} required type="password"/>
                        
                        <button className="registerButton" onClick={handleClick}>Đăng ký</button>

                        <a href="/login"className="registerLoginButton">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;