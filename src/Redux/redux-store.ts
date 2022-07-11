import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./ProfilePageReducer";
import {dialogsPageReducer} from "./DialogsPageReducer";
import {sidebarPageReducer} from "./SidebarPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer
})
export type AppStateType = ReturnType<typeof reducers> //это надо куда-то передать?
export let store = createStore(reducers);