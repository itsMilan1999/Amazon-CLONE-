import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./FireBase"


function Login() {
    const history = useHistory();
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('')
    const login = event => {
        event.preventDefault(); //prevent refrasing
        //login logic
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in ,redirect to home
                history.push("/");
            })
            .catch((e) => alert(e.message))
    }
    const register = event => {
        event.preventDefault(); //prevent refrasing
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create uder and loged in,redirect to home
                history.push("/");
            })
            .catch((e) => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_log"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk9psI4Fm9kf3QiZqOZAlE8JANiS6tGnVlTQ&usqp=CAU"
                    alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sigin in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEamil(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="Login_signInButton">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
