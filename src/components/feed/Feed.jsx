import React, { useState, useEffect, useContext } from 'react';
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

function Feed(props) {
    const [posts, setPosts] = useState([]);
    const {username} = props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user}= useContext(AuthContext);

    useEffect(()=>{
        console.log(user.username);
        
        const fetchPosts = async () =>{
            const respond = username
            ? await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/profile/` + username) 
            : await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/timeline/`+ user._id);
            // setPosts(respond.data);
            // console.log(respond);
            setPosts(respond.data.posts.sort((post1, post2)=>{
                return new Date(post2.createdAt) - new Date(post1.createdAt);//thực hiện sort theo thời gian bài post 
            }));
        }
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                {//username === user.username && 
                    <Share />
                }
                {posts.map(p=>(
                <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    );
}

export default Feed;