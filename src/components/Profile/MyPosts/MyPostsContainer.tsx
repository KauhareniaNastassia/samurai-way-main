import React, {ChangeEvent} from 'react';
import {PostPropsType} from "./Post/Post";
import {StatePropsType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

/*export type MyPostsPropsType = {
   /!* posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsType) => void*!/
}


const MyPostsContainer = (props: MyPostsPropsType) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())/!*(store._state.profilePage.newPostText)*!/;
                }

                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let action = updateNewPostActionCreator(e.currentTarget.value);
                    store.dispatch(action);
                    /!*props.dispatch (updateNewPostActionCreator(e.currentTarget.value)*!//!*, e.currentTarget.value*!/
                }

                return  <MyPosts
                    updateNewPost={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}*/

type MapStateToPropsMyPostsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

type MapDispatchToPropsMyPostsType = {
    updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}


let mapStateToPropsMyPosts = (state: StatePropsType): MapStateToPropsMyPostsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToPropsMyPosts = (dispatch: Dispatch): MapDispatchToPropsMyPostsType => {
    return {
        updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = updateNewPostActionCreator(e.currentTarget.value);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect(mapStateToPropsMyPosts, mapDispatchToPropsMyPosts)(MyPosts)
