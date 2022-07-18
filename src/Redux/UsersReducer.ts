import {ActionsType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UserPropsType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersPagePropsType = {
    users: Array<UserPropsType>
}

export type initialStateUsersPageType = UsersPagePropsType

let initialState: initialStateUsersPageType = {
    users: [
        /*{
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
        },*/
    ]
}

export const UsersReducer = (state: initialStateUsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                })
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return state
    }
}


export const followActionCreator = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {userId}
    } as const
}
export const unfollowActionCreator = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userId}
    } as const
}
export const setUsersActionCreator = (users: Array<UserPropsType>) => {
    return {
        type: 'SET-USERS',
        payload: {users}
    } as const
}