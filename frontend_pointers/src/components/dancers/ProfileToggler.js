import ProfileDropdown from "./ProfileDropdown";
import PopUpLogInRegister from "../../containers/PopupLoginRegister";
import {useSelector} from "react-redux";

function ProfileToggler() {
    const dancer = useSelector(state => state.user);

    return (
        <div>
            {dancer.displayPopup ?
                <PopUpLogInRegister logged={dancer.isAuthenticated}/> :
                <ProfileDropdown dancer={dancer.currentUser}/>}
        </div>
    )
}

export default ProfileToggler;