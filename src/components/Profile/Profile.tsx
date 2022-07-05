import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePagePropsType} from "../../Redux/state";

export type ProfilePropsType ={
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionsType) => void
}


const Profile = (props: ProfilePropsType ) => {


    return <div>
        <ProfileInfo />
        <MyPosts posts = {props.profilePage.posts}//change
                 dispatch={props.dispatch}
                 state={props.profilePage}


                 /*newPostText = {props.profilePage.newPostText}// change state to props
                 onPostChange={props.onPostChange}*/
        />
    </div>
}

export default Profile;
