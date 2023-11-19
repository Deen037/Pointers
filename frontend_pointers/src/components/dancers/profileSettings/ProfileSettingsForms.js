import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

function ProfileSettingsForms({setNewUserSet, newUserSet, dancer}) {

    useEffect(() => {
        // Initialize newUserSet with dancer's current data
        setNewUserSet({
            username: dancer.username,
            firstName: dancer.firstName,
            lastName: dancer.lastName,
            birthYear: dancer.birthYear,
            phone: dancer.phone,
            city: dancer.city,
            country: dancer.country,
            nationality: dancer.nationality,
            photo: dancer.photo,
            about: dancer.about,
            facebook: dancer.facebook,
            instagram: dancer.instagram,
            youtube: dancer.youtube,
            twitter: dancer.twitter,
            tiktok: dancer.tiktok,
            twitch: dancer.twitch,
            soundcloud: dancer.soundcloud,
            spotify: dancer.spotify,
        });
    }, [dancer]);

    function handleChange(e) {
        setNewUserSet({...newUserSet, [e.target.name]: e.target.value});
        console.log(newUserSet);
    }

    const formFields = [
        {label: 'Username', name: "username", value: newUserSet.username || ''},
        {label: 'First Name', name: "firstName", value: newUserSet.firstName || ''},
        {label: 'Last Name', name: "lastName", value: newUserSet.lastName || ''},
        {label: 'Birth Year', name: "birthYear", value: newUserSet.birthYear || '', type: 'number'},
        {label: 'Phone', name: "phone", value: newUserSet.phone || ''},
        {label: 'City', name: "city", value: newUserSet.city || ''},
        {label: 'Country', name: "country", value: newUserSet.country || ''},
        {label: 'Nationality', name: "nationality", value: newUserSet.nationality || ''},
        {label: 'Photo', name: "photo", value: newUserSet.photo || ''},
        {label: 'About', name: "about", value: newUserSet.about || ''},
        {label: 'Facebook', name: "facebook", value: newUserSet.facebook || ''},
        {label: 'Instagram', name: "instagram", value: newUserSet.instagram || ''},
        {label: 'Youtube', name: "youtube", value: newUserSet.youtube || ''},
        {label: 'Twitter', name: "twitter", value: newUserSet.twitter || ''},
        {label: 'Tiktok', name: "tiktok", value: newUserSet.tiktok || ''},
        {label: 'Twitch', name: "twitch", value: newUserSet.twitch || ''},
        {label: 'Soundcloud', name: "soundcloud", value: newUserSet.soundcloud || ''},
        {label: 'Spotify', name: "spotify", value: newUserSet.spotify || ''}
    ];

    const renderFormField = (field, index) => (
        <div className={`row`} key={index}>
            <label>{field.label}: </label>
            <input
                name={field.name}
                value={field.value}
                type={field.type || 'text'}
                onChange={handleChange}
            />
        </div>
    );



    return (
        <div className={`settings-form-left`}>
            <form>
                {formFields.map(renderFormField)}
            </form>
        </div>
    )
}

export default ProfileSettingsForms;
