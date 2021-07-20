import './topbar.css';
import {Search, Person, Chat, Notifications} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Topbar(props) {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>                
                    <span className="logo">Quang Social</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Tìm bạn, bài đăng hay những thứ khác ?" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarItem">
                        <Person />
                        <span className="topbarIconBadge">1</span> 
                    </div>
                    <div className="topbarItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span> 
                    </div>
                    <div className="topbarItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span> 
                    </div>
                </div>
                {user ? <Link to={`/profile/${user.username}`} style={{textDecoration: "none"}}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "noavata.jfif"} className="topbarImg" alt=""/>
                    <p className="topbarUserName">{user.username}</p>
                </Link>: "Unknown"}
            </div>
        </div>
    );
}

export default Topbar;