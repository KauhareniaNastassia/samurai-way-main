
import {addPostActionCreator, profilePageReducer, updateNewPostActionCreator} from "./ProfilePageReducer";
import {dialogsPageReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./DialogsPageReducer";
import {sidebarPageReducer} from "./SidebarPageReducer";

export type StorePropsType = {
    _state: StatePropsType
    _rerenderEntireTree: (_state: StatePropsType) => void
    subscribe: (observer: (_state: StatePropsType) => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>




export let store: StorePropsType = {
    _state: {
        sidebar: {
            friends: [
                {id: 1, friendName: 'Olya', avatar: ''},
                {id: 2, friendName: 'Alesya', avatar: ''},
                {id: 3, friendName: 'Lena', avatar: ''},
            ]
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post', likesCount: 15},
                {id: 3, message: 'Azaza', likesCount: 10},
                {id: 4, message: 'Ururu', likesCount: 15},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nastassia'},
                {id: 2, name: 'Nikolay'},
                {id: 3, name: 'Alexey'},
                {id: 4, name: 'Olya'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your project?'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'Ololo'},
            ],
            newMessageBody: ''
        }
    },
    _rerenderEntireTree(_state: StatePropsType) {
        console.log("State changed")
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },

    /*addPost(newPostText: string) {
        let newPost: PostPropsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText, //тут погас профиль пэйдж
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''

        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newPost: string) {
        this._state.profilePage.newPostText = newPost //change newText to newPost
        this._rerenderEntireTree(this._state)
    },*/

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarPageReducer(this._state.sidebar, action)

        this._rerenderEntireTree(this._state)
    }

}


/*export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD_POST',
        newPostText: newPostText
    } as const
}
export const updateNewPostActionCreator = (newPost: string) => {
    return {
        type: 'UPDATE_NEW_POST_tEXT',
        newPost: newPost
    } as const
}
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'ADD_POST',
        body: body
    } as const
}
export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}*/


/*let rerenderEntireTree = (state: StatePropsType) => {
    console.log("State chan
    ged")
}*/

export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    sidebar: SideBarPropsType
}

export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type SideBarPropsType = {
    friends: Array<FriendPropsType>
}

export type FriendPropsType = {
    id: number
    friendName: string
    avatar: string
}

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    id: number
    message: string
}


/*export let _state: StatePropsType = {
    sidebar: {
        friends: [
            {id: 1, friendName: 'Olya', avatar: ''},
            {id: 2, friendName: 'Alesya', avatar: ''},
            {id: 3, friendName: 'Lena', avatar: ''},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 15},
            {id: 3, message: 'Azaza', likesCount: 10},
            {id: 4, message: 'Ururu', likesCount: 15},
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nastassia'},
            {id: 2, name: 'Nikolay'},
            {id: 3, name: 'Alexey'},
            {id: 4, name: 'Olya'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your project?'},
            {id: 3, message: 'Bye'},
            {id: 4, message: 'Ololo'},
        ],
    }
}*/


/*export let addPost = (newPostText: string) => {
    let newPost: PostPropsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText, //newPostText
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''

    rerenderEntireTree(state)
}*/

/*export let updateNewPostText = (newPost: string) => {
       state.profilePage.newPostText = newPost //change newText to newPost
    rerenderEntireTree(state)
}*/

/*
export const subscribe = (observer: (state: StatePropsType) => void) => {
    rerenderEntireTree=observer;
}*/

/*
window.store = store*/
