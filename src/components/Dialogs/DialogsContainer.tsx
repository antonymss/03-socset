import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreReduxType} from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogType = {
    store: StoreReduxType

}


export const DialogsContainer: React.FC<any> = () => {

    // let state = props.store.getState().dialogsPage
    //
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //
    //     props.store.dispatch(updateNewMessageBodyCreator(e))
    // }
    return <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(updateNewMessageBodyCreator(e))
                    }
                   return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>
                }}
        </StoreContext.Consumer>


}

