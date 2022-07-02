export type StorePropsType = {
    _state: StatePropsType
    /* updateNewPostText: (newPost: string) => void
     addPost: (newPostText: string) => void*/
    _rerenderEntireTree: (_state: StatePropsType) => void
    subscribe: (observer: (_state: StatePropsType) => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPost: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType


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

    dispatch(action) {   //{ type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost: PostPropsType = {
                id: new Date().getTime(),
                message: action.newPostText, //тут погас профиль пэйдж
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPost //change newText to newPost
            this._rerenderEntireTree(this._state)
        }
    }
}


/*let rerenderEntireTree = (state: StatePropsType) => {
    console.log("State changed")
}*/

export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    sidebar: SideBarPropsType
}

export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
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
