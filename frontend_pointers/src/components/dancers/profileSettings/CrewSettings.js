import React, {useEffect, useState} from "react";

function CrewSettings({setNewUserSet, newUserSet, dancer}) {

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

    const createCrew = async () => {
        try {
            const response = await fetch(`http://localhost:8080/crews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(newCrew),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAllCrews([...allCrews, data]);
            setMyCrews([...myCrews, data]);
            setNewCrew({
                name: "",
                city: "",
                country: "",
            });
            console.log(data)

        } catch (error) {
            console.error('Fetch error: ', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        const selectedCrewIds = myCrews.map(crew => crew.id);
        const updatedUnselectedCrews = allCrews.filter(crew => !selectedCrewIds.includes(crew.id));
        setUnselectedCrews(updatedUnselectedCrews);
    }, [allCrews, myCrews]);

    function toggleCrew(crewId) {
        const crew = allCrews.find(crew => crew.id === crewId);
        let updatedMyCrews;

        if (myCrews.some(myCrew => myCrew.id === crew.id)) {
            // Crew is already in myCrews, remove it
            updatedMyCrews = myCrews.filter(myCrew => myCrew.id !== crew.id);
            setMyCrews(updatedMyCrews);
            setUnselectedCrews([...unselectedCrews, crew]);
        } else {
            // Crew is not in myCrews, add it
            updatedMyCrews = [...myCrews, crew];
            setMyCrews(updatedMyCrews);
            setUnselectedCrews(unselectedCrews.filter(unselectedCrew => unselectedCrew.id !== crew.id));
        }
        setNewUserSet(prevState => ({...prevState, crew: updatedMyCrews}));
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
        </div>
    );
}

export default CrewSettings;