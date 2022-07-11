import {ActionsType, DialogsPagePropsType} from "./store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

type initialStateDialogsPageType = DialogsPagePropsType


let initialState: initialStateDialogsPageType = {
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

export const dialogsPageReducer = (state: DialogsPagePropsType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            console.log('update message body')
            return {...state, newMessageBody: action.newMessageBody}
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
        }
}


export const updateNewMessageBodyActionCreator = (body: string) => {
    console.log('update message', body)
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        newMessageBody: body
    } as const
}
export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}