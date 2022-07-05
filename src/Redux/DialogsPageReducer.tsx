import {ActionsType, DialogsPagePropsType} from "./state";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsPageReducer = (state: DialogsPagePropsType, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state
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