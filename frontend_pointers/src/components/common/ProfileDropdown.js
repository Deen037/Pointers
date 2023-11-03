import React, { useEffect, useState } from "react";
import "../../styles/ProfileDropDown.css";
import { CogIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function ProfileDropdown({ setIsLogged, isLogged, setDisplayPopUp, dancer }) {
    const [open, setOpen] = useState(false);

    function logout() {
        setIsLogged(false);
    }

    useEffect(() => {
        function handleOutsideClick(e) {
            if (!e.target.closest(".menu-container")) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // Profile picture or user icon
    const profileImage = dancer.photo ? (
        <img className="profile" alt="profile" src={dancer.photo} />
    ) : (
        <div className="userIcon">
            <UserIcon style={{ height: "27px", color: "#5ea9be" }} />
        </div>
    );

    return (
        <div className="menu-container">
            {isLogged ? (
                <>
                    {/* Profile picture */}
                    <div
                        className={`menu-trigger ${open ? "active" : "inactive"}`}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {profileImage}
                    </div>

                    {/* Dropdown menu */}
                    <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                        <div className="ul">
                            <p className="nickname">{dancer.username}</p>
                            <Link to={`/profile/${dancer.email}`}></Link>
                            <DropdownRow img={<UserIcon className="icon" />} text="Profile" />
                            <Link to={`/settings/`} className="link">
                                <DropdownRow img={<CogIcon className="icon" />} text="Settings" />
                            </Link>
                            <DropdownRow
                                img={<LogoutIcon className="icon" />}
                                text="Log out"
                                onClick={logout}
                            />
                        </div>
                    </div>
                </>
            ) : (
                // User not logged in
                <div className="userIcon">
                    <UserIcon style={{ height: "27px" }} onClick={() => setDisplayPopUp(true)} />
                </div>
            )}
        </div>
    );
}

function DropdownRow({ img, text, onClick }) {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {img}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{text}</a>
        </div>
    );
}

export default ProfileDropdown;