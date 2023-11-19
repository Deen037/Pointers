import React from "react";
import "./../../../styles/ProfileSettings.css";
import ProfileSettingsForms from "./ProfileSettingsForms";
import CrewSettings from "./CrewSettings";

function ProfileSettingsContainer() {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Settings</h2>
            </div>
            <div className={`settings-forms`}>
                <ProfileSettingsForms/>
                <CrewSettings/>
            </div>
            <div className={`done`}>
                <input className={`button`} type="button" value="Done"/>
            </div>
        </div>
    )
}

export default ProfileSettingsContainer;