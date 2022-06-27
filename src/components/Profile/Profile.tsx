import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType, ProfilePagePropsType, state, StatePropsType, updateNewPostText} from "../../Redux/state";

export type ProfilePropsType ={
    profilePage: ProfilePagePropsType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void
    /*onPostChange: (newPostText: string) => void
    profilePage:ProfilePagePropsType//new*/
    /*message: string//new typ*/

}


const Profile = (props: ProfilePropsType ) => {


    return <div>
        <ProfileInfo />
        <MyPosts posts = {props.profilePage.posts}//change
                 addPost={props.addPost}
                 updateNewPostText = {props.updateNewPostText}

                 /*newPostText = {props.profilePage.newPostText}// change state to props
                 onPostChange={props.onPostChange}*/
        />
    </div>
}

export default Profile;
