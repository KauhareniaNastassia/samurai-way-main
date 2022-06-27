import React from 'react';
import s from './Post.module.css';


export type PostPropsType ={
    message: string
    likesCount: number
}



const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://www.axismedicalstaffing.com/wp-content/uploads/2020/01/flamingo-1792211_1920-1.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>

    )

}

export default Post;
