import { React } from "react";
import { Link } from "react-router-dom";

function MyEvents(exampleEvent) {
  const Event = exampleEvent.exampleEvent;
  return (
    <div id="middleboxrightmargin">
      <Link to="/my-event" style={{ textDecoration: "none", color: "#aaaca1" }}>
        {" "}
        <h3>
          {Event.eventName} / {Event.eventSpot} / {Event.eventDate}
        </h3>{" "}
      </Link>
    </div>
  );
}

export default MyEvents;
