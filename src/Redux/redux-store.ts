import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profilePageReducer, updateNewPostActionCreator} from "./ProfilePageReducer";
import {dialogsPageReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./DialogsPageReducer";
import {sidebarPageReducer} from "./SidebarPageReducer";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator, UsersReducer} from "./UsersReducer";



export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>

let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);

