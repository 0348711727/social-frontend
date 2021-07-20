import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Profile(props) {
    
    const [user, setUser] = useState();
    const params_username = useParams().username;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(()=>{
        const fetchUser = async () =>{
            const respond = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users?username=${params_username}`);
            setUser(respond.data);
        }
        fetchUser();
    }, [params_username]);
    
    return (
        user ? 
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={user.coverPicture ? PF + user.coverPicture : PF + "/nobackground.jfif"}  alt=""/>
                            <img className="profileUserImg" src={user.profilePicture ? PF + user.profilePicture : PF + "/noavata.jfif"} alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.description ? user.description : "Mình là cá thu đây"}</span>
                        </div>
                    </div>
                    <div className="profileBottom">
                        <Feed {...props} username={params_username}/>
                        
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </div> : "Loading ..." //mục đích toàn bộ trên là nếu có user hay username thì mới chạy vòng div, k có thì sẽ chay loading
        
    );
}

export default Profile;