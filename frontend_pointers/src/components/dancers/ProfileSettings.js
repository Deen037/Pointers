import "./../../styles/ProfileSettings.css";
import React from "react";
import {useSelector} from "react-redux";

function ProfileSettings() {
    const dancer = useSelector(state => state.user.currentUser);
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Settings</h2>
            </div>
            <div className={`settings-forms`}>
                <div className={`settings-form-left`}>
                    <form>
                        <div className={`row`}>
                            <label>Username: </label>
                            <input placeholder={dancer.username}/>
                        </div>
                        <div className={`row`}>
                            <label>First Name: </label>
                            <input placeholder={dancer.firstName}/>
                        </div>
                        <div className={`row`}>
                            <label>Last Name: </label>
                            <input placeholder={dancer.lastName}/>
                        </div>
                        <div className={`row`}>
                            <label>Birthdate: </label>
                            <input placeholder={dancer.birthdate} type="date"/>
                        </div>
                        <div className={`row`}>
                            <label>Phone Number: </label>
                            <input placeholder={dancer.phone}/>
                        </div>
                        <div className={`row`}>
                            <label>City :</label>
                            <input placeholder={dancer.city}/>
                        </div>
                        <div className={`row`}>
                            <label>Country :</label>
                            <input placeholder={dancer.country}/>
                        </div>
                        <div className={`row`}>
                            <label>Nationality :</label>
                            <input placeholder={dancer.nationality}/>
                        </div>
                        <div className={`row`}>
                            <label>Photo</label>
                            <input placeholder={dancer.photo}/>
                        </div>
                        <div className={`row`}>
                            <label>About: </label>
                            <input placeholder={dancer.about}/>
                        </div>
                        <div className={`row`}>
                            <label>Instagram: </label>
                            <input placeholder={dancer.instagram}/>
                        </div>
                        <div className={`row`}>
                            <label>Facebook: </label>
                            <input placeholder={dancer.facebook}/>
                        </div>
                        <div className={`row`}>
                            <label>Youtube: </label>
                            <input placeholder={dancer.youtube}/>
                        </div>
                        <div className={`row`}>
                            <label>Twitter: </label>
                            <input placeholder={dancer.twitter}/>
                        </div>
                        <div className={`row`}>
                            <label>Tiktok: </label>
                            <input placeholder={dancer.tiktok}/>
                        </div>
                        <div className={`row`}>
                            <label>Spotify: </label>
                            <input placeholder={dancer.spotify}/>
                        </div>
                        <div className={`row`}>
                            <label>Soundcloud: </label>
                            <input placeholder={dancer.soundcloud}/>
                        </div>
                        <div className={`row`}>
                            <label>Twitch: </label>
                            <input placeholder={dancer.twitch}/>
                        </div>
                        <div className={`row`}>
                            <label>Change Password: </label>
                            <input placeholder="New Password" type="password"/>
                        </div>
                        <div className={`row`}>
                            <label>Confirm Password: </label>
                            <input placeholder="Confirm Password" type="password"/>
                        </div>
                    </form>
                </div>
                <div className={`settings-form-right`}>
                    <div className={`row`}>
                        <input className={`button`} type="button" value="Set Crew"/>
                    </div>
                    <div className={`row`}>
                        <input className={`button`} type="button" value="Set Event"/>
                    </div>
                </div>
            </div>
            <div className={`done`}>
                <input className={`button`} type="button" value="Done"/>
            </div>

        </div>
    )
}

export default ProfileSettings;