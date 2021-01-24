import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type DialogType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (e:ChangeEvent<HTMLTextAreaElement>) => void
    sendMessage: () => void
}


export const Dialogs: React.FC<DialogType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.message.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.updateNewMessageBody(e)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button  onClick={onSendMessageClick}> Add post
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

