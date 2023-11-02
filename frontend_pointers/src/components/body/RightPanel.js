import { Route, Routes } from "react-router-dom";
import HomeAbout from "./rightPanel/HomeAbout";
import Broadcast from "./rightPanel/Broadcast";
import ErrorPage from "./rightPanel/ErrorPage";
import CreateEvent from "./rightPanel/CreateEvent";
import MyEvents from "./rightPanel/MyEvents";
import MyEvent from "./rightPanel/MyEvent";
import Timeline from "./rightPanel/Timeline";
import ProfileSettings from "../header/ProfileDropDown/ProfileSettings";
import {useState} from "react";

const RightPanel = ({ judgePage }) => {
  const exampleEvent = {
    eventName: "DBL",
    eventSpot: "BDS academy",
    eventDate: "3-7-1985",
    eventOrganizer: "De la Čučimír",
    eventVs: "Crew vs Crew",
    eventStyle: "Allstyle",
  };

const [loggedDancerEmail, setLoggedDancerEmail] = useState("");

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
        {/*<Route path={"/profileSettings/"+loggedDancerEmail} element={<ProfileSettings setLoggedDancerEmail={setLoggedDancerEmail()}/>} />*/}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RightPanel;
