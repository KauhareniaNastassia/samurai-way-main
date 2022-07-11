import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogPropsType, DialogsPagePropsType,
    MessagePropsType,
    store, StorePropsType
} from "../../Redux/store";

import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../Redux/DialogsPageReducer'
import Dialogs from "./Dialogs";

export type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsPropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        console.log('onNewMessage', body)
        props.dispatch(updateNewMessageBodyActionCreator(body))

    }

    return (

        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messages={props.dialogsPage.messages}
            dialogs={props.dialogsPage.dialogs}
            newMessageBody={props.dialogsPage.newMessageBody}
        />

    )
}

export default DialogsContainer


