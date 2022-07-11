import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogPropsType, DialogsPagePropsType,
    MessagePropsType,
    store, StorePropsType
} from "../../Redux/store";

import {sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/DialogsPageReducer'

export type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map (m => <Message message = {m.message} />)


    let onSendMessageClick = () => {
        props.sendMessage()
       /* props.store.dispatch(sendMessageActionCreator())*/
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('onChange')
        let body = e.target.value
        props.updateNewMessageBody(body)
       /* props.store.dispatch(updateNewMessageBodyActionCreator(body))*/

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
                        value={props.newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}
                    >
                    </textarea> </div>
                    <div> <button onClick={onSendMessageClick}> Send </button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs


