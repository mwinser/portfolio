import '../assets/css/profilePic.css';
import ProfileImg from '../assets/images/Profile.webp';
function ProfilePic(){
    return (
        <div id="img-frame">
            <img src={ProfileImg} alt="Close up of Alden with clouds in the background" />
        </div>);
}

export default ProfilePic