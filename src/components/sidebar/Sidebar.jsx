import React from 'react';
import "./sidebar.css";
import {Users} from "../../DataTest";
import {RssFeed, Chat, PlayCircleOutline, Group, BookmarkBorder, HelpOutline, WorkOutline, Event, School} from "@material-ui/icons";
import Friend from '../friend/Friend';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleOutline className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkBorder className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Xem thêm</button>
                <hr />
                <ul className="sidebarFriendList">
                    {Users.map(u =>(
                        <Friend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;