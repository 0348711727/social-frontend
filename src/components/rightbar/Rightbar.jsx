import "./rightbar.css";
import Online from "../online/Online";
import {Users} from "../../DataTest";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

function Rightbar({user}) {
    const [friends, setFriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext)
    const [followed, setFollow] = useState(false);
    useEffect(()=>{
        const getFriends = async () =>{
            // try {
                // const friendList = await axios.get("/users/friends/" + user._id);
                // console.log(friendList.data);
                // setFriends(friendList.data);
                // setFriends(friendList.data);

            // } catch (error) {
                // console.log(error)
            // }
        };
        // getFriends();
        // console.log((friends));
    }, []);
    // useEffect(()=>{
    //     setFollow(currentUser.followings.includes(currentUser._id))
    // }, [currentUser])

    const handleFollow =  async () => {
        // try {
        //     if(followed)
        //     {
        //         await axios.put("/users/"+user._id+"/follow", {userId: currentUser._id})
        //     }
        //     else
        //     {
        //         await axios.put("/users/"+user._id+"/unfollow", {userId: currentUser._id})
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
        setFollow(!followed)
    }
    const HomeRightBar = () =>{
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.jpg" alt=""/>
                    <span className="birthdayText">
                        <b>Minh Nghĩa</b> và <b>3 người khác</b> có sinh nhật vào hôm nay
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.jpg" alt=""/>
                <h4 className="rightbarTitle">Bạn Online</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=> (
                        <Online key={u.id} user={u}/>
                    ))} 
                </ul>
            </>
        )
    }
    const ProfileRightBar = () =>{
        return(
            <>
            {user.username !== currentUser.username && 
                <button className="rightbarFollow" onClick={handleFollow}>
                    {followed ? "Bỏ theo dõi": "Theo dõi"}
                    {followed ? <Remove />: <Add />}
                </button>
            }
                <h4 className="rightbarTitle">Thông tin người dùng</h4>
                <div className="righbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Đến Từ:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Thành phố:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Mối quan hệ:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Độc Thân" : user.relationship === 2 ? "Đã Kết Hôn" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">Thông tin bạn bè</h4>
                <div className="rightbarFollowings">
                    { friends.length > 0 ? friends.map((friend) =>(
                        <div className="rightbarFollowing" key={friend.id} >
                        <img className="rightbarFollowingImg" src={friend.profilePicture} alt=""/>
                        <span className="rightbarFollowingName">{friend.username}</span>
                    </div>
                    )): "Loading"}
                        {/* {friends.map((friends)=>( */}    
                </div>
            </>
        )
    }
    
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/>: <HomeRightBar />}
            </div>
        </div>
    );
}

export default Rightbar;