import {useEffect, useState} from "react";
import "../../styles/ProfileDropDown.css";
import {CogIcon, LogoutIcon, UserIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";

function ProfileDropDown({setIsLogged, isLogged, setDisplayPopUp, dancer}) {
    const [open, setOpen] = useState(false);

    function logout() {
        setIsLogged(false);
    }

    useEffect(() => {
        let handler = (e) => {
            if (!e.target.closest('.menu-container')) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
    })

    // elements

    const userIconElement =
    <div className="userIcon">
        <UserIcon style={{height: "27px", color: "#5ea9be"}}/>
    </div>

    const profileImgElement = <img className="profile" alt="profile" src={dancer.photo}/>


    return (
        <div className="menu-container">
            {isLogged ? (
                <>
                  {/*profile picture*/}

                    <div className={`menu-trigger ${open ? "active" : "inactive"}`}
                            onClick={() => {setOpen(!open)}}>
                        {dancer.photo ? (profileImgElement) : (userIconElement)}
                    </div>

                    {/*dropdown menu*/}

                    <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                        <div className="ul">
                            <p className="nickname">{dancer.username}</p>
                            <Link to={`/profile/${dancer.email}`}></Link>
                            <DropdownItem img=<UserIcon className="icon"/> text="Profile" />
                            <Link to={`/settings/`} className="link">
                                <DropdownItem img=<CogIcon className="icon"/> text="Settings"/>
                            </Link>
                            <DropdownItem img=<LogoutIcon className="icon"/> text="Log out" onClick={logout}/>
                        </div>
                    </div>
            </>) : (

                // user not logged in

                <div className="userIcon">
                    <UserIcon style={{height: "27px"}} onClick={() => setDisplayPopUp(true)}/>
                </div>
            )}
        </div>
    )
}

function DropdownItem(props) {
    return (
        <div className="dropdown-item" onClick={props.onClick}>
            {props.img}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{props.text}</a>
        </div>
    )
}

export default ProfileDropDown;