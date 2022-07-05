import {ActionsType, ProfilePagePropsType} from "./state";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_tEXT = 'UPDATE-NEW-POST-TEXT';


export const profilePageReducer = (state: ProfilePagePropsType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText, //тут погас профиль пэйдж
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



export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const updateNewPostActionCreator = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPost: newPost
    } as const
}