import React, {useEffect, useState} from "react";
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
    const dancer = useSelector(state => state.user.currentUser);
    const [allCrews, setAllCrews] = useState([]);
    const [myCrews, setMyCrews] = useState(dancer.crew || []);  // Initialize with dancer.crew or an empty array
    const [unselectedCrews, setUnselectedCrews] = useState([]);
    const [error, setError] = useState(null);
    const [newCrew, setNewCrew] = useState({
        name: "",
        city: "",
        country: "",
    });

    function handleChange(event) {
        setNewCrew({...newCrew, [event.target.name]: event.target.value})
        console.log(newCrew);
    }

    useEffect(() => {
        const fetchCrews = async () => {
            try {
                const response = await fetch("http://localhost:8080/crews");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAllCrews(data);
            } catch (error) {
                console.error('Fetch error: ', error);
                setError(error.message);
            }
        };
        fetchCrews();
    }, []);

    function createCrew() {
        fetch("http://localhost:8080/crews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newCrew.name,
                city: newCrew.city,
                country: newCrew.country
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        const selectedCrewIds = myCrews.map(crew => crew.id);
        const updatedUnselectedCrews = allCrews.filter(crew => !selectedCrewIds.includes(crew.id));
        setUnselectedCrews(updatedUnselectedCrews);
    }, [allCrews, myCrews]);

    function toggleCrew(crewId) {
        const crew = allCrews.find(crew => crew.id === crewId);
        if (myCrews.some(myCrew => myCrew.id === crew.id)) {
            // Crew is already in myCrews, remove it
            setMyCrews(myCrews.filter(myCrew => myCrew.id !== crew.id));
            setUnselectedCrews([...unselectedCrews, crew]);
        } else {
            // Crew is not in myCrews, add it
            setMyCrews([...myCrews, crew]);
            setUnselectedCrews(unselectedCrews.filter(unselectedCrew => unselectedCrew.id !== crew.id));
        }
    }

    return (
        <div className={`settings-form-right`}>
            <div>
                <p>Your crew(s): </p>
                {myCrews.map((crew, index) =>
                    <button onClick={() => toggleCrew(crew.id)} key={`${index}`}> {crew.name} </button>)}
            </div>
            <div className={`otherCrews`}>
                <p>Other crews: </p>
                {unselectedCrews.map((crew, index) =>
                    <button onClick={() => toggleCrew(crew.id)} key={`${index}`}>{crew.name}</button>)}
            </div>
            <div className={`createCrew`}>
                <p>Create a crew: </p>
                <form onChange={handleChange}>
                    <input name="name" placeholder={`Crew name`} type="text" required={true}/>
                    <input name="city" placeholder={`City`} type="text"/>
                    <input name="country" placeholder={`Country`} type="text"/>
                    <input className={`button`} type="button"
                           value="Create Crew" onClick={createCrew}/>
                </form>
            </div>
            <div className={`row`}>
                <input className={`button`} type="button" value="Set Event"/>
            </div>
        </div>
    );
}

export default ProfileSettings;
