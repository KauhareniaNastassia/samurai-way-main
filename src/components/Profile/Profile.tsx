import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePagePropsType} from "../../Redux/state";

export type ProfilePropsType ={
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionsType) => void
    /*addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void*/
    /*onPostChange: (newPostText: string) => void
    profilePage:ProfilePagePropsType//new*/
    /*message: string//new typ*/
}


const Profile = (props: ProfilePropsType ) => {


    return <div>
        <ProfileInfo />
        <MyPosts posts = {props.profilePage.posts}//change
                 dispatch={props.dispatch}


                 /*newPostText = {props.profilePage.newPostText}// change state to props
                 onPostChange={props.onPostChange}*/
        />
    </div>
}

export default Profile;
