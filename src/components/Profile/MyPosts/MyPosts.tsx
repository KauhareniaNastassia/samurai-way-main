import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {ActionsType, store} from "../../../Redux/state";
import {message} from "antd";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
    /*addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void*/
    dispatch: (action: ActionsType) => void



}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = store._state.profilePage.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)

    const addPost = () => {
        props.dispatch ( { type: 'ADD-POST', newPostText: store._state.profilePage.newPostText})/*(store._state.profilePage.newPostText)*/;
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch ({ type: 'UPDATE-NEW-POST-TEXT', newPost: e.currentTarget.value }/*, e.currentTarget.value*/)
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {props.posts.map(p => <div>{p.message}</div>)}
            <div>
                    <textarea
                        onChange={onPostChange}
                        value={store._state.profilePage.newPostText}/>
                    <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )

}

export default MyPosts;