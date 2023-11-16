import {useState} from "react";
import ProfileDropdown from "../common/ProfileDropdown";
import PopUpLogInRegister from "../../containers/PopupLoginRegister";
import {emptyDancer} from "../../assets/data.js";

function Profile() {
    const [isLogged, setIsLogged] = useState(false);
    const [displayPopup, setDisplayPopup] = useState(false);
    const [dancer, setDancer] = useState(emptyDancer);


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
                                 setDancer={setDancer}
                                 dancer={dancer}/>}
        </div>
    )
}

export default Profile;