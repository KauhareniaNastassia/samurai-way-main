import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePagePropsType, StorePropsType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionsType) => void
}


const Profile = (props: ProfilePropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    </div>
}

export default Profile;
