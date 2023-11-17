import {useState} from "react";
import {login} from "../redux/userSlice";
import {useDispatch} from "react-redux";

function useAuth() {
    const [loginResponse, setLoginResponse] = useState(true);
    const [registerResponse, setRegisterResponse] = useState(true);
    const dispatch = useDispatch();

    const url = "http://localhost:8080/dancers";
    const loginDancer = (loginValues) => {

        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginValues),
        })
            .then((response) => {
                if (!response.ok) {
                    setLoginResponse(false);
                }
                return response.json();
            })
            .then((data) => {
                dispatch(login(data));
                setLoginResponse(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const registerDancer = (loginValues) => {

        fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginValues),
        })
            .then((res) => {
                if (!res.ok) {
                    setRegisterResponse(false);
                } else {
                    loginDancer(loginValues);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        loginResponse,
        registerResponse,
        loginDancer,
        registerDancer,
    };
}

export default useAuth;
