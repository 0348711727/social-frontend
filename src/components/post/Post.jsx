import {useState, useEffect, useContext} from 'react';
import "./post.css";
import {MoreVert, ScreenShareOutlined} from "@material-ui/icons";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import queryString from "query-string";
import { AuthContext } from '../../context/AuthContext';

function Post( {post} ) {
    const [like, setLike]= useState(post.likes.length);
    const [isliked, setisliked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user: currentUser} = useContext(AuthContext);

    useEffect(()=>{
        setisliked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])//này để xử lý coi lỡ như đã like dưới backend r mà bấm like trên fe nó ghi dislike
    
    const likeHandler = ()=>{
        try {
            axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
        } catch (error) {

        }
        setLike(isliked ? like-1 : like+1)
        setisliked(!isliked)
    }
    useEffect(()=>{
    const fetchUser = async () =>{
        const params = {
            userId: post.userId,
        };
        const respond = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            // baseURL: "http://gôgle",
            header: {},
            params,
            paramsSerializer: (params) => queryString.stringify(params),    
            
        });
        // const respond = await axios.get(`http://localhost:5000/social-backend/users`, {
        //     // baseURL: "http://gôgle",
        //     header: {},
        //     params,
        //     paramsSerializer: (params) => queryString.stringify(params),    
            
        // });
        setUser(respond.data);
    }
    fetchUser();
}, [post.userId]);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "/noavata.jfif"} alt=""/>
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.description}</span>
                    <img className="postImg" src={PF + post.img} alt=""/>
                </div>
                <hr />
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" className="likeIcon" onClick={likeHandler} alt=""/>
                        <img src="/assets/heart.png" className="likeIcon" onClick={likeHandler} alt=""/>
                        <img src="/assets/haha.png" className="likeIcon" onClick={likeHandler} alt=""/>
                        <span className="postLikeCounter">{like} thích </span>
                    </div>
                    <div className="postBottomCenter">
                        <span className="postComment">{post.comment} Bình luận</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postShare">Chia sẻ</span>
                        <ScreenShareOutlined className="postShareIcon"/>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default Post;