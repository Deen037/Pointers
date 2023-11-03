import {useState} from "react";
import ProfileDropdown from "../common/ProfileDropdown";
import PopUpLogInRegister from "../../containers/PopUpLogInRegister";

function Profile() {
    const [isLogged, setIsLogged] = useState();
    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [dancer, setDancer] = useState({
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        role: "",
        photo: "",
        crew: [
            {
                city: "",
                country: "",
                id: "",
                name: "",
            }
        ]
    })


    return (
        <div>
            {displayPopUp ?
                <PopUpLogInRegister setDisplayPopUp={setDisplayPopUp}
                                    setIsLogged={setIsLogged}
                                    setDancer={setDancer}/> :
                <ProfileDropdown isLogged={isLogged}
                                 setIsLogged={setIsLogged}
                                 setDisplayPopUp={setDisplayPopUp}
                                 dancer={dancer}/>}
        </div>
    )
}

export default Profile;