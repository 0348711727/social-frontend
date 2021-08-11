import React, { useContext, useEffect, useRef } from 'react';
import "./login.css";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
// import axios from "axios";
import axios from "../../Axios_url"; 
const Login = ({myStorage}) => {
    const email = useRef();
    const password = useRef();

    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
        // localStorage.setItem("email", email.current.value)
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Quang Social</h3>
                    <span className="loginDesc">
                        Đăng nhập vào Quang Social và kết nối với bạn bè đi
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = {handleClick}>
                        <input className="loginInput" placeholder="Email" type="email" ref={email} required/>

                        <input className="loginInput" placeholder="Password" type="password" ref={password} required minLength="6"/>

                        <button className="loginButton" disabled={isFetching}>
                            Đăng nhập
                        </button>
                        <span className="loginForgot">Quên mật khẩu ?</span>
                        <a href="/register" className="loginRegisterButton">
                            Đăng ký
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;