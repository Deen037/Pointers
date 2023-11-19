import {useState} from "react";
import "./../../../styles/ProfileSettings.css";
import ProfileSettingsForms from "./ProfileSettingsForms";
import CrewSettings from "./CrewSettings";
import {useSelector} from "react-redux";


function ProfileSettingsContainer() {
    const dancer = useSelector(state => state.user.currentUser);
    const [newUserSet, setNewUserSet] = useState({});

    function updateProfile(){
        fetch(`http://localhost:8080/dancers/update/${dancer.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserSet),
        })
            .then((r) => r.json())
            .then((updatedUser) => {
                console.log("Neser: " + updatedUser);
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
                <input className={`button`} type="button" value="Save Changes" onClick={updateProfile}/>
            </div>
        </div>
    )
}

export default ProfileSettingsContainer;