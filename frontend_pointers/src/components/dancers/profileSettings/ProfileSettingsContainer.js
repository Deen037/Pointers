import React, {useState} from "react";
import "./../../../styles/ProfileSettings.css";
import ProfileSettingsForms from "./ProfileSettingsForms";
import CrewSettings from "./CrewSettings";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../../redux/userSlice";
import {UserIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";


function ProfileSettingsContainer() {
    const dancer = useSelector(state => state.user.currentUser);
    const [newUserSet, setNewUserSet] = useState({});
    const dispatch = useDispatch();

    function updateProfile() {
        fetch(`http://localhost:8080/dancers/update/${dancer.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserSet),
        })
            .then((r) => r.json())
            .then((updatedUser) => {
                console.log(updatedUser);
                dispatch(update(updatedUser))

            });
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Settings</h2>
            </div>
            <div className={`settings-forms`}>
                <ProfileSettingsForms
                    setNewUserSet={setNewUserSet}
                    newUserSet={newUserSet}
                    dancer={dancer}/>
                <CrewSettings setNewUserSet={setNewUserSet}
                              newUserSet={newUserSet}
                              dancer={dancer}/>
            </div>
            <div className={`done`}>
                <Link to={`/profile/${dancer.email}`} className="link">
                    <input className={`button`}
                           type="button"
                           value="Save Changes"
                           onClick={updateProfile}/>
                </Link>

            </div>
        </div>
    )
}

export default ProfileSettingsContainer;