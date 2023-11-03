import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    PlusCircleIcon,
    HomeIcon,
    DeviceTabletIcon,
    ClipboardListIcon,
    CalendarIcon,
} from "@heroicons/react/outline";
import "../../styles/BodyLeftMenuPanel.css";

const menuItems = [
    { icon: <HomeIcon className="icon" />, text: "HOME", link: "/" },
    { icon: <CalendarIcon className="icon" />, text: "TIMELINE", link: "/timeline" },
    { icon: <ClipboardListIcon className="icon" />, text: "MY EVENTS", link: "/my-events" },
    { icon: <DeviceTabletIcon className="icon" />, text: "BROADCAST", link: "/broadcast" },
    { icon: <PlusCircleIcon className="icon" />, text: "CREATE EVENT", link: "/create-event" },
];

const BodyLeftMenuPanel = () => {
    const location = useLocation();

    return (
        <div className="middle-box-left">
            <div className="middle-box-left-margin">
                {menuItems.map((menuItem, index) => (
                    <div className="menu" key={index}>
                        {menuItem.icon}
                        <Link to={menuItem.link} className={`link ${location.pathname === menuItem.link ? "active" : ""}`}>
                            {menuItem.text}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BodyLeftMenuPanel;
