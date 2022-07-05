import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogPropsType,
    MessagePropsType,
    store, StorePropsType
} from "../../Redux/state";

import {sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/DialogsPageReducer'

export type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    store: StorePropsType

}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage



    let dialogsElements = store._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = store._state.dialogsPage.messages.map (m => <Message message = {m.message} />)
    let newMessageBody = store._state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}>
                        onChange={onNewMessageChange}
                    </textarea> </div>
                    <div> <button onClick={onSendMessageClick}> Send </button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs


