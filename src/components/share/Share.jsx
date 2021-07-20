import React, { useContext, useRef, useState } from 'react';
import {PermMedia, Label, LocationOn, TagFaces, Cancel} from "@material-ui/icons";
import "./share.css";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Share(props) {
    const {user} = useContext(AuthContext); 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const description = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) =>{
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: description.current.value,
        }
        if(file)
        {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error)
            }
        }
        // else
        // {
        //     console.log(newPost)
        //     console.log(file)
        // }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();  
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "noavata.jfif"} alt="" />
                    <input placeholder={"Bạn đang nghĩ gì " + user.username + " ? "} className="shareInput" ref={description} />
                </div>
                <hr className="shareHr"/>
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                        <Cancel className="shareCancel" onClick={()=>setFile(null)}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".png, .jpeg, .jpg, jfif" onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOn htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <TagFaces htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit" >Share</button>
                </form>
            </div>
        </div>
    );
}

export default Share;