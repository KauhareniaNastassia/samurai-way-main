import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagePropsType, state, StatePropsType} from "../../Redux/state";

export type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}


const Dialogs = (props: DialogsPropsType) => {



    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.dialogsPage.messages.map (m => <Message message = {m.message} />)





    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs


