import '../assets/css/profilePic.css';
import ProfileImg from '../assets/images/profile.jpg';
function ProfilePic(){
    return (
        <div id="img-frame">
            <img
                src={ProfileImg}
                alt="Close up of Alden" />
        </div>);
}

export default ProfilePic