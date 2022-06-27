import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {addPost, state, updateNewPostText} from "../../../Redux/state";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void

}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = state.profilePage.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)

    const addPost = () => {
        props.addPost(state.profilePage.newPostText);
        props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText (e.currentTarget.value)
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {props.posts.map(p => <div>{p.message}</div>)}
            <div>
                    <textarea
                        onChange={onPostChange}
                        value={state.profilePage.newPostText}/>
                    <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )

}

export default MyPosts;