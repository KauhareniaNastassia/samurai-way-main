import React from 'react';
import {connect} from "react-redux";
import {UsersPage} from "./UsersPage";
import {
    initialStateDialogsPageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../Redux/DialogsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followActionCreator,
    initialStateUsersPageType,
    setUsersActionCreator,
    unfollowActionCreator, UserPropsType
} from "../../Redux/UsersReducer";

type MapStateToPropsUsersType = {
    users: initialStateUsersPageType
}

type MapDispatchToPropsUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserPropsType>) => void
}

export type UsersPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

let mapStateToPropsUsers = (state: AppStateType): MapStateToPropsUsersType => {
    return {
       users: state.usersPage
    }
}

let mapDispatchToPropsUsers = (dispatch: Dispatch): MapDispatchToPropsUsersType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: Array<UserPropsType>) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}



export const UsersPageContainer = connect(mapStateToPropsUsers, mapDispatchToPropsUsers)(UsersPage)

