import React from "react";
import {useSelector} from "react-redux";
import "./../../styles/ProfileSettings.css";

function ProfileSettings() {
    const dancer = useSelector(state => state.user.currentUser);

    const formFields = [
        {label: 'Username', value: dancer.username},
        {label: 'First Name', value: dancer.firstName},
        {label: 'Last Name', value: dancer.lastName},
        {label: 'Birthdate', value: dancer.birthdate, type: "date"},
        {label: 'Phone Number', value: dancer.phone},
        {label: 'City', value: dancer.city},
        {label: 'Country', value: dancer.country},
        {label: 'Nationality', value: dancer.nationality},
        {label: 'Photo', value: dancer.photo},
        {label: 'About', value: dancer.about},
        {label: 'Instagram', value: dancer.instagram},
        {label: 'Facebook', value: dancer.facebook},
        {label: 'Youtube', value: dancer.youtube},
        {label: 'Twitter', value: dancer.twitter},
        {label: 'Tiktok', value: dancer.tiktok},
        {label: 'Spotify', value: dancer.spotify},
        {label: 'Soundcloud', value: dancer.soundcloud},
        {label: 'Twitch', value: dancer.twitch},
    ];

    const renderFormField = (field, index) => (
        <div className={`row`} key={index}>
            <label>{field.label}: </label>
            <input value={field.value} type={field.type}/>
        </div>
    );

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Settings</h2>
            </div>
            <div className={`settings-forms`}>
                <div className={`settings-form-left`}>
                    <form>
                        {formFields.map(renderFormField)}
                    </form>
                </div>
                <SettingsFormRight/>
            </div>
            <div className={`done`}>
                <input className={`button`} type="button" value="Done"/>
            </div>
        </div>
    );
}

function SettingsFormRight() {
    return (
        <div className={`settings-form-right`}>
            <div className={`row`}>
                <input className={`button`} type="button" value="Set Crew"/>
            </div>
            <div className={`row`}>
                <input className={`button`} type="button" value="Set Event"/>
            </div>
        </div>
    );
}

export default ProfileSettings;
