import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {dialogsPageType} from "../../App";

export type DialogsType = {
    id: number
    name: string
}
// type MyDialogsType = {
//     dialogs: Array<DialogsType>
//     message: Array<MessageType>
//     }

type DialogType = {
    state: dialogsPageType
}




export const Dialogs: React.FC<DialogType> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = props.state.message.map(m => <Message message={m.message} id={m.id}/>)


return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

        <div className={s.messages}>
            {messagesElements}
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button> Add post</button>
        </div>
    </div>
)
}

