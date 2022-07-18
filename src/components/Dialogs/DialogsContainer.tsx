import React from 'react';

import {
    initialStateDialogsPageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../Redux/DialogsPageReducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

/*export type DialogsContainerPropsType = {
    /!*!//store: StorePropsType
   /!* dialogsPage: DialogsPagePropsType*!/
    /!*dispatch: (action: ActionsType) => void*!/!*!/
}*/

/*const DialogsContainer = (props: DialogsContainerPropsType) => {
    return <StoreContext.Consumer>
        {
        (store) => {

            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))

            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage}/> //почему так?
        }
    }
    </StoreContext.Consumer>
}*/

    /*messages={state}  //{props.dialogsPage.messages}
    dialogs= {state}    //{props.dialogsPage.dialogs}
    newMessageBody= {state}  //  {props.dialogsPage.newMessageBody}*/


type MapStateToPropsDialogsType = {
    dialogsPage: initialStateDialogsPageType
}

type MapDispatchToPropsDialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapDispatchToPropsDialogsType & MapStateToPropsDialogsType

let mapStateToPropsDialogs = (state: AppStateType): MapStateToPropsDialogsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToPropsDialogs = (dispatch: Dispatch): MapDispatchToPropsDialogsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}


export const DialogsContainer = connect(mapStateToPropsDialogs, mapDispatchToPropsDialogs)(Dialogs);




