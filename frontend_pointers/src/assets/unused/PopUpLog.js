import {useEffect, useState} from "react";
import {UserIcon, MailIcon, LockClosedIcon} from "@heroicons/react/outline";
import "./PopUpLogInRegister.css";
import {json} from "react-router";


function PopUpLogInRegister({setWantToLogin, setIsLogged, setDancer}) {
    const [action, setAction] = useState("Login");
    const [loginResponse, setLoginResponse] = useState(true);
    const [registerResponse, setRegisterResponse] = useState("");

    const [credentials, setCredentials] = useState({
        nickName: "",
        email: "",
        password: ""
    });


    function handleCredentialsChange(event) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const url = "http://localhost:8080/dancers";

    function getDancer() {
        fetch(`${url}/email?email=${credentials.email}`, {
            method: "GET",
        }).then(response => {
                if (response.status === 400) {
                    setLoginResponse(false);
                    return response.statusText;
                }
                return response.json()
            }
        ).then(data => {
            setIsLogged(true);
            setWantToLogin(false)
            setLoginResponse(true);
            setDancer(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    function registerDancer() {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((res) => {
            if (!res.ok) {
                setRegisterResponse(false);
            } else {
                // setIsLogged(true);
                // setWantToLogin(false)
            }
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        });
    }

    function loginBtn() {
        if (action === "Login") {
            getDancer();
        } else {
            setAction("Login")
            setLoginResponse(true);
            setRegisterResponse(true)
        }
    }

    function registerBtn() {
        if (action === "Register") {
            registerDancer();
        } else {
            setAction("Register")
            setLoginResponse(true);
        }
    }

    useEffect(() => {
        let handler = (e) => {
            if (!e.target.closest('.container')) {
                setWantToLogin(false);
            }
        }
        document.addEventListener('mousedown', handler);
    })

    return (
        <div className="popup">
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form onChange={handleCredentialsChange}>
                    <div className="inputs">
                        {action === "Login" ? (<></>) : (<div className="input">
                            <UserIcon className="icon"/>
                            <input type="text" placeholder="Nickname" name="nickName" required={true}/>
                        </div>)}
                        <div className="input">
                            <MailIcon className="icon"/>
                            <input type="email" placeholder="Email" name="email" required/>
                        </div>
                        <div className="input">
                            <LockClosedIcon className="icon"/>
                            <input type="password" placeholder="Password" name="password" required/>
                        </div>
                        {loginResponse ? (<div></div>) : (
                            <div className="response" style={{color: "red"}}>Wrong email or password !</div>)}
                        {registerResponse ? (<div></div>) : (
                            <div className="response" style={{color: "red"}}>Email already registered! Log in.</div>)}
                    </div>
                    <div className="submit-container">
                        <div className={action === "Register" ? "submit" : "submit gray"}
                             onClick={registerBtn}>Register
                        </div>
                        <div className={action === "Login" ? "submit" : "submit gray"}
                             onClick={loginBtn}>Login
                        </div>
                    </div>
                    {action === "Register" ? (<></>) : (
                        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>)}
                </form>
            </div>
        </div>
    )
}

export default PopUpLogInRegister;