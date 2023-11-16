import {useState} from "react";
import ProfileDropdown from "../common/ProfileDropdown";
import PopUpLogInRegister from "../../containers/PopupLoginRegister";
import {emptyDancer} from "../../assets/data.js";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../redux/userSlice";

function Profile() {
    const user = useSelector(state => state.currentUser);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false);
    const [displayPopup, setDisplayPopup] = useState(false);
    const [dancer, setDancer] = useState(emptyDancer);

    const handleLogin = () => {
        const userData = { name: 'John Doe', email: 'john@example.com' };
        dispatch(login(userData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

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