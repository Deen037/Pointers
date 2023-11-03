import {useEffect, useState} from "react";
import {UserIcon, MailIcon, LockClosedIcon} from "@heroicons/react/outline";
import "../styles/PopUpLogInRegister.css";
import FormInput from "./FormInput";


function PopUpLogInRegister({setDisplayPopUp, setIsLogged, setDancer}) {
    const [action, setAction] = useState("Login")
    const [loginResponse, setLoginResponse] = useState(true);
    const [registerResponse, setRegisterResponse] = useState("");
    const [loginValues, setLoginValues] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [registerValues, setRegisterValues] = useState({
        email: "",
        password: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            icon: <UserIcon className="icon"/>,
            required: true,
            className: `input ${action}`
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            icon: <MailIcon className="icon"/>,
            errorMessageLogin: loginResponse === false ? "Wrong email or password" : "",
            errorMessageRegister: registerResponse === false ? "Email already exists" : "",
            required: true,
            className: "input email"
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            icon: <LockClosedIcon className="icon"/>,
            errorMessagePassword: action === "Register" ? "at least 8 characters, 1 uppercase, 1 lowercase, 1 number" : "",
            required: true,
            // pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
            // at least 8 characters, 1 uppercase, 1 lowercase, 1 number
            className: "input password"
        }
    ]

    function handleSubmit(e) {
        e.preventDefault();
    }

    function onChange(e) {
        setLoginValues({...loginValues, [e.target.name]: e.target.value});
        setRegisterValues({...registerValues, [e.target.name]: e.target.value});
    }


    // REST

    const url = "http://localhost:8080/dancers";

    function loginDancer() {
        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginValues),
        }).then(response => {
                if (!response.ok) {
                    setLoginResponse(false);
                }
                return response.json()
            }
        ).then(data => {
            setIsLogged(true);
            setDisplayPopUp(false)
            setLoginResponse(true);
            setDancer(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const registerDancer = () => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerValues)
        }).then((res) => {
            if (!res.ok) {
                setRegisterResponse(false);
            } else {
                // setIsLogged(true);
                setDisplayPopUp(false);
                loginDancer();
            }
        }).catch(err => {
            console.log(err)
        });
    }


    // BUTTONS
    function loginBtn() {
        loginDancer();
    }

    function registerBtn() {
        registerDancer();
    }

    function showRegisterForm() {
        setAction("Register");
        // setPasswordPatternDisplay(true);
    }

    // CLOSE POPUP
    useEffect(() => {
        let handler = (e) => {
            if (!e.target.closest('.container')) {
                setDisplayPopUp(false);
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
                {action === "Login" ? (
                    <form onSubmit={handleSubmit} className="inputs">
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={loginValues[input.name]} onChange={onChange}/>
                        ))}
                        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                        <div className="submit-container">
                            <div className="submit"
                                 onClick={loginBtn}>
                                <button>Login</button>
                            </div>
                        </div>
                        <div className="want-to-register">For Registration <span
                            onClick={showRegisterForm}>Click Here !</span></div>
                    </form>) : (
                    <form onSubmit={handleSubmit} className="inputs">
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={registerValues[input.name]}
                                       onChange={onChange}/>
                        ))}
                        <div className="submit-container">
                            <div className="submit"
                                 onClick={registerBtn}
                            >
                                <button>Register</button>
                            </div>
                        </div>
                    </form>)}
            </div>
        </div>
    )
}

export default PopUpLogInRegister;