import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType, state} from "../../Redux/state";

export type ProfilePropsType ={
    posts: Array<PostPropsType>
}


const Profile = (props: ProfilePropsType ) => {


    return <div>
        <ProfileInfo />
        <MyPosts posts = {state.profilePage.posts}/>
    </div>
}

export default Profile;
