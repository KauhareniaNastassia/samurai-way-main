import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";
import {store} from "../../../../Redux/store";

export type FriendPropsType ={
    friendName: string
    avatar: string
}

const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.item}>
                <img src='https://www.axismedicalstaffing.com/wp-content/uploads/2020/01/flamingo-1792211_1920-1.jpg'/>
                {props.friendName}
            </div>

    )}

export default Friend;