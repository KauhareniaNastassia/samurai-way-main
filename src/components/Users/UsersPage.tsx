import React from 'react';
import {UsersPropsType} from "./UsersPageContainer";
import styles from './Users.module.css'

export const UsersPage = (props: UsersPropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/736x/2d/fa/4c/2dfa4c96e8e9497107df3ea8a2700279.jpg',
                followed: false,
                fullName: 'Olga',
                status: 'I\'m so happy',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/736x/2d/fa/4c/2dfa4c96e8e9497107df3ea8a2700279.jpg',
                followed: false,
                fullName: 'Lena',
                status: 'Such a beautiful day',
                location: {city: 'Warsaw', country: 'Poland'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/736x/2d/fa/4c/2dfa4c96e8e9497107df3ea8a2700279.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'Hello!',
                location: {city: 'Alma-Aty', country: 'Kazakhstan'}
            },
        ])
    }


    return (
        <div>
            {
                props.users.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                 {u.followed
                                     ? <button onClick={() => {
                                         props.follow(u.id)
                                     }}> Follow </button>
                                     : <button onClick={() => {
                                         props.unfollow(u.id)
                                     }}> unFollow </button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>


                    </div>
                )
            }


        </div>

    )
};

