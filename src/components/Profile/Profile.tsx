import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


/*export type ProfilePropsType = {

   /!* profilePage: ProfilePagePropsType
    dispatch: (action: ActionsType) => void*!/
}*/


const Profile = () => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            /*posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}*/
        />
    </div>
}

export default Profile;


//что мы сюда передаем???