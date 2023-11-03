import { Route, Routes } from "react-router-dom";
import HomeAbout from "../../pages/HomeAbout";
import Broadcast from "../../pages/Broadcast";
import ErrorPage from "../../pages/ErrorPage";
import CreateEvent from "../events/CreateEvent";
import MyEvents from "../events/MyEvents";
import MyEvent from "../events/MyEvent";
import Timeline from "../../pages/Timeline";

const BodyRightPanel = ({ judgePage }) => {
  const exampleEvent = {
    eventName: "DBL",
    eventSpot: "BDS academy",
    eventDate: "3-7-1985",
    eventOrganizer: "De la Čučimír",
    eventVs: "Crew vs Crew",
    eventStyle: "Allstyle",
  };

  return (
    <div id="middleboxright">
      <Routes>
        <Route path="/" element={<HomeAbout />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route
          path="/create-event"
          element={<CreateEvent exampleEvent={exampleEvent} />}
        />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route
          path="/my-events"
          element={<MyEvents exampleEvent={exampleEvent} />}
        />
        <Route
          path="/my-event"
          element={
            <MyEvent exampleEvent={exampleEvent} judgePage={judgePage} />
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default BodyRightPanel;