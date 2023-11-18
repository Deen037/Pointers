import {useSelector} from "react-redux";
import "./../../styles/Profile.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faInstagram, faFacebook, faTwitter,
    faYoutube, faTiktok, faSoundcloud, faTwitch,
    faSpotify
} from '@fortawesome/free-brands-svg-icons';


function Profile() {
    const dancer = useSelector(state => state.user.currentUser);
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>{dancer.username}</h2>
                <div className={`socials`}>
                    <a href={dancer.instagram} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={dancer.tiktok} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a href={dancer.youtube} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href={dancer.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href={dancer.soundcloud} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSoundcloud} />
                    </a>
                    <a href={dancer.spotify} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href={dancer.twitch} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitch} />
                    </a>
                    <a href={dancer.twitter} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>


            <div className={`profile-inner`}>
                <div className={`profile`}>
                    <div className={`profile__image`}>
                        <img src="https://i.imgur.com/tyjxiCH.png" alt="profile"/>
                    </div>
                    <div className={`profile__info`}>
                        <h2>{dancer.firstName} {dancer.lastName}</h2>
                        <p>{dancer.email}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;