import React, {useEffect, useState} from "react";
import "../../styles/ProfileDropDown.css";
import {CogIcon, LogoutIcon, UserIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import {logout, togglePopup} from "../../redux/userSlice";
import {useDispatch, useSelector} from "react-redux";

function ProfileDropdown({dancer}) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    function logoutUser() {
        dispatch(logout());
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
        <img className="profile" alt="profile" src={dancer.photo}/>
    ) : (
        <div className="userIcon">
            <UserIcon style={{height: "27px", color: "#5ea9be"}}/>
        </div>
    );

    return (
        <div className="menu-container">
            {useSelector(state => state.user.isAuthenticated) ? (
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
                            <p className="crew">{dancer.crew? dancer.crew.map((crew, index) =>
                                <span key={`${index}`}>| {crew.name} |</span>): ""}</p>
                            <Link to={`/profile/${dancer.email}`} className="link">
                                <DropdownRow img={<UserIcon className="icon drop"/>}
                                             text="Profile"/>
                            </Link>
                            <Link to={`/settings/${dancer.email}`} className="link">
                                <DropdownRow img={<CogIcon className="icon drop"/>}
                                             text="Settings"/>
                            </Link>
                            <Link to={"/"} className={`link`}>
                                <DropdownRow
                                    img={<LogoutIcon className="icon drop"/>}
                                    text="Logout"
                                    onClick={logoutUser}
                                />
                            </Link>

                        </div>
                    </div>
                </>
            ) : (
                // User not logged in
                <div className="userIcon">
                    <UserIcon style={{height: "27px"}}
                              onClick={() => dispatch(togglePopup())}/>
                </div>
            )}
        </div>
    );
}

function DropdownRow({img, text, onClick}) {
    return (
        <div className={`dropdown-item ${text}`} onClick={onClick}>
            {img}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p>{text}</p>
        </div>
    );
}

export default ProfileDropdown;
