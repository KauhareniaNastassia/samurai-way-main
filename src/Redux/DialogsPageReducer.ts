import {ActionsType, DialogPropsType, MessagePropsType} from "./store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

export type initialStateDialogsPageType = DialogsPagePropsType


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

export const dialogsPageReducer = (state: initialStateDialogsPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.payload.newMessageBody
            }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
        }
}


export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        payload: {
            newMessageBody: body
        }
    } as const
}
export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}