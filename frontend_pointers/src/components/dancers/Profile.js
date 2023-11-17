import {useSelector} from "react-redux";

function Profile () {
    const dancer = useSelector(state => state.user.currentUser);
    return (
        <div>
            <h1>Profile</h1>
            <p>My name is: {dancer.username}</p>
        </div>
    )
}

export default Profile;