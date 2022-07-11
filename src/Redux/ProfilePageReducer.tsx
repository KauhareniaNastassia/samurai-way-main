import {ActionsType, ProfilePagePropsType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_tEXT = 'UPDATE-NEW-POST-TEXT';

type initialStateProfilePageType = ProfilePagePropsType

let initialState: initialStateProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'Azaza', likesCount: 10},
        {id: 4, message: 'Ururu', likesCount: 15},
    ],
    newPostText: ''
}

export const profilePageReducer = (state: ProfilePagePropsType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText, //тут погас профиль пэйдж
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_NEW_POST_tEXT:
            state.newPostText = action.newPost;
            return state;
        default:
            return state
    }
}



export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const updateNewPostActionCreator = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPost: newPost
    } as const
}