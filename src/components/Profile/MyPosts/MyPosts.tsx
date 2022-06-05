import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {

}


const MyPosts = (props: MyPostsPropsType) => {
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
                <Post message = 'Hi, how are you?' likesCount = {10}/>
                <Post message = "It's my first post" likesCount = {15} />
            </div>
        </div>
    )

}

export default MyPosts;