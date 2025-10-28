import { useState } from 'react';
import '../assets/css/profilePic.css';
import ProfileImg from '../assets/images/profile.jpg';
function ProfilePic(){
    const [loaded, setLoaded] = useState(false);
    return (
        <div id="img-frame">
            <img
                src={ProfileImg}
                alt="Close up of Alden"
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? 'block' : 'none' }} />
        </div>);
}

export default ProfilePic