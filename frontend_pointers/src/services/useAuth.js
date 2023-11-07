import { useState } from "react";

function useAuth() {
    const [loginResponse, setLoginResponse] = useState(true);
    const [registerResponse, setRegisterResponse] = useState(true);

    const url = "http://localhost:8080/dancers";
    const loginDancer = (loginValues, setIsLogged, setDancer, setDisplayPopup) => {

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
              console.log(response);
            }
            return response.json();
          })
          .then((data) => {
            setIsLogged(true);
            setLoginResponse(true);
            setDancer(data);
            setDisplayPopup(false);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const registerDancer = (registerValues, setIsLogged, setDisplayPopUp) => {

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerValues),
        })
          .then((res) => {
            if (!res.ok) {
              setRegisterResponse(false);
            } else {
              setIsLogged(true);
              setDisplayPopUp(false);
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
