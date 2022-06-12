export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage:DialogsPagePropsType
    sidebar: SideBarPropsType
}

export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
}

export type SideBarPropsType = {
   friends: Array<FriendPropsType>
}

export type FriendPropsType = {
    id: number
    name: string
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


export let state: StatePropsType = {

    sidebar: {
        friends: [
            {id: 1, name: 'Olya', avatar:''},
            {id: 2, name: 'Alesya', avatar:''},
            {id: 3, name: 'Lena', avatar:''},
        ]
    },


    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10 },
            {id: 2, message: 'It\'s my first post',  likesCount: 15},
            {id: 3, message: 'Azaza', likesCount: 10 },
            {id: 4, message: 'Ururu',  likesCount: 15},
        ]
    },

    dialogsPage:{
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
}}