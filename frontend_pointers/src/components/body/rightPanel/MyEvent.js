import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function MyEvent({ exampleEvent, judgePage }) {
  const currentEvent = exampleEvent;
  const [enter, setEnter] = useState(false);
  const [judgesObject, setJudgesObject] = useState([]);

  let judgesNamesExample = [
    "Wahe",
    "Andyboj",
    "Pitkin",
    "Potkis",
    "Endrewstyle",
    "Miro",
    "Mula",
    "Mathew",
  ];

  const opt = (e) => {
    e.preventDefault();
    const sel = e.target.value;
    let currentObject = [];
    for (let i = 1; i <= sel; i++) {
      let singleJudge = {
        name: judgesNamesExample[i - 1],
        link: `${currentEvent.eventName}${currentEvent.eventDate}${
          judgesNamesExample[i - 1]
        }`,
      };
      currentObject.push(singleJudge);
    }
    setJudgesObject(currentObject);
  };

  let path = "";
  const clickOnJudge = (e) => {
    e.preventDefault();
    const id = document.getElementById(e.target.id);
    const name = id.innerText;
    for (let i = 0; i < judgesObject.length; i++) {
      if (judgesObject[i].name === name) {
        path = judgesObject[i].link;
      }
    }

    judgePage(path, name);
    window.open(path);
  };

  const judgeNamesSubmit = () => {
    setEnter(true);
  };

  return (
    <div id="middleboxrightmargin">
      <h3>
        {currentEvent.eventName} / {currentEvent.eventSpot} /{" "}
        {currentEvent.eventDate}
      </h3>
      <p>details :</p>
      <br />

      <div>
        {enter ? (
          <div>
            {judgesObject.map((name) => (
              <>
                <Link
                  onClick={clickOnJudge}
                  to={name.link}
                  id={name.name}
                  style={{ textDecoration: "none", color: "#aaaca1" }}
                >
                  {name.name}
                </Link>

                <br></br>
              </>
            ))}
          </div>
        ) : (
          <>
            <div>
              <form>
                <label>How many judges ?</label>
                <select
                  onChange={opt}
                  style={{
                    marginLeft: "20px",
                    padding: "10px",
                    background: "#aaaca1",
                    border: "none",
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </form>
            </div>
            <div>
              {" "}
              {judgesObject.map((name, num) => (
                <>
                  <label>judge {num + 1} : </label>
                  <input placeholder={name.name}></input>
                  <br></br>
                </>
              ))}
              <button onClick={judgeNamesSubmit}>Enter</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyEvent;
