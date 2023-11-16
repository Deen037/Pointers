const judgesNamesExample = [
    "Wahe",
    "Andyboj",
    "Pitkin",
    "Potkis",
    "Endrewstyle",
    "Miro",
    "Mula",
    "Mathew",
];

const exampleEvent = {
    eventName: "DBL",
    eventSpot: "BDS academy",
    eventDate: "3-7-1985",
    eventOrganizer: "De la Čučimír",
    eventVs: "Crew vs Crew",
    eventStyle: "Allstyle",
};

const emptyDancer = {
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    role: "",
    photo: "",
    crew: [
        {
            city: "",
            country: "",
            id: "",
            name: "",
        }
    ]
}

export { exampleEvent, judgesNamesExample, emptyDancer };