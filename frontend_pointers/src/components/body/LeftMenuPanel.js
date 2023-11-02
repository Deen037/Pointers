import React from "react";
import "../../styles/LeftMenuPanel.css";
import {Link} from "react-router-dom";
import {
    PlusCircleIcon,
    HomeIcon,
    DeviceTabletIcon,
    ClipboardListIcon,
    CalendarIcon
} from "@heroicons/react/outline";

const LeftMenuPanel = () => {
    return (
        <div className="middle-box-left">
            <div className="middle-box-left-margin">
                <div className="menu">
                    <HomeIcon className="icon"/>
                    <Link className="link" to="/">
                        HOME
                    </Link>
                </div>
                <div className="menu">
                    <CalendarIcon className="icon"/>
                    <Link to="/timeline" className="link">
                        TIMELINE
                    </Link>
                </div>
                <div className="menu">
                    <ClipboardListIcon className="icon"/>
                    <Link to="/my-events" className="link">
                        MY EVENTS
                    </Link>
                </div>
                <div className="menu">
                    <DeviceTabletIcon className="icon"/>
                    <Link to="/broadcast" className="link">
                        BROADCAST
                    </Link>
                </div>
                <div className="menu">
                    <PlusCircleIcon className="icon"/>
                    <Link to="/create-event" className="link">
                        CREATE EVENT
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeftMenuPanel;


