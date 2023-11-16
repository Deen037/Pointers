import {useState} from "react";
import ProfileDropdown from "../common/ProfileDropdown";
import PopUpLogInRegister from "../../containers/PopupLoginRegister";

function Profile() {
    const [isLogged, setIsLogged] = useState();
    const [displayPopup, setDisplayPopup] = useState(false);
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
            {displayPopup ?
                <PopUpLogInRegister setDisplayPopup={setDisplayPopup}
                                    isLogged={isLogged}
                                    setIsLogged={setIsLogged}
                                    setDancer={setDancer}/> :
                <ProfileDropdown isLogged={isLogged}
                                 setIsLogged={setIsLogged}
                                 setDisplayPopup={setDisplayPopup}
                                 dancer={dancer}/>}
        </div>
    )
}

export default Profile;