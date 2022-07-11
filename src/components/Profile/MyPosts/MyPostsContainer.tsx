import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {ActionsType, ProfilePagePropsType, store, StorePropsType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


const MyPostsContainer = (props: MyPostsPropsType) => {


    const addPost = () => {
        props.dispatch(addPostActionCreator())/*(store._state.profilePage.newPostText)*/;
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = updateNewPostActionCreator(e.currentTarget.value);
        props.dispatch(action);
        /*props.dispatch (updateNewPostActionCreator(e.currentTarget.value)*//*, e.currentTarget.value*/
    }

    return (
        <MyPosts
            updateNewPost={onPostChange}
            addPost={addPost}
            posts={props.posts}
            newPostText={props.newPostText}


        />
    )

}

export default MyPostsContainer;