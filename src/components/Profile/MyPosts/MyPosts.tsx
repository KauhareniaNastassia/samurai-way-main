import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import post from "./Post/Post";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message = {p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
               {/* <Post message = {postData[0].message} likesCount={postData[0].likesCount} />
                <Post message = {postData[1].message} likesCount={postData[1].likesCount} />*/}
            </div>
        </div>
    )

}

export default MyPosts;