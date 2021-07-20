import React, { useContext, useRef } from 'react';
import "./login.css";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

function Login({myStorage}) {
    const email = useRef();
    const password = useRef();

    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    const storage = myStorage;
    const handleClick = (e) =>{
        e.preventDefault();
        // console.log(email.current.value + password.current.value)
        loginCall({email: email.current.value, password: password.current.value, storage: myStorage}, dispatch);
    }
    // console.log(user)0
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