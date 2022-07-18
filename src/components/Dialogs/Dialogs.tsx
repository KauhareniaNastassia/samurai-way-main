import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

/*export type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    /!*dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string*!/
}*/



const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map (m => <Message message = {m.message} key={m.id} />)


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
                        value={props.dialogsPage.newMessageBody}
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


