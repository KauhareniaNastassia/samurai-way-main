import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";
import {ActionsType, ProfilePagePropsType, store} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePageReducer";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
    updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
    newPostText: string
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)


    const onAddPost = () => {
        props.addPost()

        /*props.dispatch ( addPostActionCreator(props.state.newPostText))*/ //закоментила для конт компоненты
        /*(store._state.profilePage.newPostText)*/;
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e)
       /* let text = newPostText.current.value;
        props.updateNewPost(newPostText);

        props.dispatch (updateNewPostActionCreator(e.currentTarget.value)*/

    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {props.posts.map(p => <div>{p.message}</div>)}
            <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                    <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )

}

export default MyPosts;