import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";


type DialogType = {

    store: StoreType
}


export const Dialogs: React.FC<DialogType> = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.message.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
     let body = e.currentTarget.value
    props.store.dispatch(updateNewMessageBodyCreator(e))
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> Add post
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

