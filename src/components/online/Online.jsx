import "./online.css";

function Online({user}) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarImg" src={user.profilePicture} alt=""/>
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarName">{user.username}</span>
            </li>
        </div>
    );
}
export default Online;