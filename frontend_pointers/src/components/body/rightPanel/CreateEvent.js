import React from "react";
import "../../../styles/CreateEvent.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateEvent({ exampleEvent }) {
  const [vsButton, setVsButton] = useState("");
  const [styleButton, setStyleButton] = useState("");
  const [createButton, setCreateButton] = useState(true);

  const Event = exampleEvent;

  function clickedButtonVs(e) {
    let buttons = document.querySelectorAll("#vs-btns > button");
    const button = document.getElementById(e.target.id);

    buttons.forEach((button) => {
      button.style.display = "none";
    });

    button.style.display = "";
    setVsButton(button.innerText + " - ");
  }

  function clickedButtonStyle(e) {
    let button = document.getElementById(e.target.id);
    button.style.display = "none";
    setStyleButton(button.innerText);
  }

  function createButtonClick(e) {
    setCreateButton(false);
  }

  return (
    <div id="middleboxrightmargin">
      {createButton ? (
        <div id="create-event">
          <div id="create-event-top">
            <div id="create-event-left">
              <h3>Create new event: </h3>
              <form>
                <input type="text" placeholder="Event name ?"></input>
                <input type="text" placeholder="Where ?"></input>
                <input type="date"></input>
                <input type="text" placeholder="Organizator ?"></input>
              </form>
            </div>
            <div id="create-event-right">
              <h3>Category:</h3>
              <div>
                <p>{vsButton}</p>
                <p id="p-style-button">{styleButton}</p>
              </div>
            </div>
          </div>
          <div id="create-event-bottom">
            <h3>Vs:</h3>
            <div id="vs-btns">
              <button id="one-vs" onClick={clickedButtonVs}>
                1 vs 1
              </button>
              <button id="two-vs" onClick={clickedButtonVs}>
                2 vs 2
              </button>
              <button id="three-vs" onClick={clickedButtonVs}>
                3 vs 3
              </button>
              <button id="four-vs" onClick={clickedButtonVs}>
                4 vs 4
              </button>
              <button id="five-vs" onClick={clickedButtonVs}>
                5 vs 5
              </button>
              <button id="crew-vs" onClick={clickedButtonVs}>
                Crew vs Crew
              </button>
              <button>+ Add new</button>
            </div>
            <h3>Style: </h3>
            <div id="category-btns">
              <button id="allstyle" onClick={clickedButtonStyle}>
                Allstyle
              </button>
              <button id="hip-hop" onClick={clickedButtonStyle}>
                Hip Hop
              </button>
              <button id="house-dance" onClick={clickedButtonStyle}>
                House dance
              </button>
              <button id="lockin" onClick={clickedButtonStyle}>
                Lockin`
              </button>
              <button id="poppin" onClick={clickedButtonStyle}>
                Poppin`
              </button>
              <button id="experimental" onClick={clickedButtonStyle}>
                Experimental
              </button>
              <button id="b-boying" onClick={clickedButtonStyle}>
                B-boying
              </button>
              <button id="krump" onClick={clickedButtonStyle}>
                Krump
              </button>
              <button id="dancehall" onClick={clickedButtonStyle}>
                Dancehall
              </button>
              <button id="waacking" onClick={clickedButtonStyle}>
                Waacking
              </button>
              <button id="add-new">+ Add new</button>
            </div>
          </div>
          <button onClick={createButtonClick}>Create</button>
        </div>
      ) : (
        <div id="new-event-review">
          <p>Name:</p>
          <h3>{Event.eventName}</h3>
          <p>Spot:</p>
          <h3>{Event.eventSpot}</h3>
          <p>Date:</p>
          <h3>{Event.eventDate}</h3>
          <p>Org:</p>
          <h3>{Event.eventOrganizator}</h3>
          <p>About: </p>
          <h3>
            {Event.eventVs} - {Event.eventStyle}
          </h3>
          <Link to="/my-event">
            <button id="enter-link-button">Enter</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CreateEvent;
