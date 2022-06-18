import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {state} from "../../../Redux/state";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = state.profilePage.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)


    let newPostElement = React.useRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""}
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {props.posts.map(p => <div>{p.message}</div>)}
            <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )

}

export default MyPosts;