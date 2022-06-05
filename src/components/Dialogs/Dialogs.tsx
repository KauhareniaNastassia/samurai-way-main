import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



type DialogItemPropsType = {
    name: string,
    id: number,
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog+ ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}




type DialogsPropsType = {
    DialogItemPropsType: Array<DialogItemPropsType>
    MessagePropsType: string
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Nastassia" id={1} />
                <DialogItem name="Nikolay" id={2} />
                <DialogItem name="Alexey" id={3} />
                <DialogItem name="Olya" id={4} />
            </div>
            <div className={s.messages}>
                <Message message ="Hi"/>
                <Message message ="How is your project?"/>
                <Message message ="Bye"/>
            </div>
        </div>
    )
}

export default Dialogs


