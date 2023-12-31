import {useEffect, useState} from "react";
import "../styles/PopUpLogInRegister.css";
import FormInput from "./FormInput";
import useAuth from "../services/useAuth";
import {LockClosedIcon, MailIcon, UserIcon} from "@heroicons/react/outline";
import {useDispatch} from "react-redux";
import {togglePopup} from "../redux/userSlice";

function PopupLoginRegister({logged}) {
    const [action, setAction] = useState("Login");
    const {loginResponse, registerResponse, loginDancer, registerDancer} = useAuth();
    const [loginValues, setLoginValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const dispatch = useDispatch();

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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (action === "Login") {
            loginDancer(loginValues); // Call the login function from your auth service
        } else {
            registerDancer(loginValues); // Similarly, you would have a function for registration
        }
    }

    function onChange(e) {
            setLoginValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // BUTTONS

    function showRegisterForm() {
        setAction("Register");
        // setPasswordPatternDisplay(true);
    }

    // CLOSE POPUP
    useEffect(() => {
        let handler = (e) => {
            if(!logged){
                if (!e.target.closest('.container')) {
                    dispatch(togglePopup());
                }
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div className="popup">
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>


                {action === "Login" ? (
                    // Login form
                    <form onSubmit={handleSubmit} className="inputs">
                        {inputs.filter(input => input.name !== 'username').map((input) => (
                            <FormInput key={input.id} {...input} value={loginValues[input.name]} onChange={onChange}/>
                        ))}
                        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                        <div className="submit-container">
                            <div className="submit"
                                 onClick={(e) => {
                                     e.preventDefault();
                                     loginDancer(loginValues);
                                 }}>
                                <button>Login</button>
                            </div>
                        </div>
                        <div className="want-to-register">For Registration <span
                            onClick={showRegisterForm}>Click Here !</span></div>
                    </form>) : (
                    <form onSubmit={handleSubmit} className="inputs">
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={loginValues[input.name]}
                                       onChange={onChange}/>
                        ))}
                        <div className="submit-container">
                            <div className="submit"
                                 onClick={(e) => {
                                        e.preventDefault();
                                        registerDancer(loginValues);
                                 }}
                            >
                                <button>Register</button>
                            </div>
                        </div>
                    </form>)}
            </div>
        </div>
    )
}

export default PopupLoginRegister;