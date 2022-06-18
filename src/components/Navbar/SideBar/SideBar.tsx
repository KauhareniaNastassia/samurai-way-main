import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {state} from "../../../Redux/state";
import Post from "../../Profile/MyPosts/Post/Post";


const SideBar = () => {

    let friendsElements = state.sidebar.friends.map (f => <Friend friendName={f.friendName} avatar={f.avatar}/>)

    return (
        <div>
            { friendsElements }
        </div>
    )}

export default SideBar;