import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {ActionsType, ProfilePagePropsType, store} from "../../../Redux/state";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePageReducer";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
    dispatch: (action: ActionsType) => void
    state: ProfilePagePropsType
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)


    const addPost = () => {
        props.dispatch ( addPostActionCreator(props.state.newPostText))/*(store._state.profilePage.newPostText)*/;
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch (updateNewPostActionCreator(e.currentTarget.value)/*, e.currentTarget.value*/)
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