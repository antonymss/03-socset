import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

//
// export type DialogsType = {
//     id: number
//     name: string
// }
// type MyDialogsType = {
//     dialogs: Array<DialogsType>
//     message: Array<MessageType>
//     }

type DialogType = {
    dialogsPage: DialogsPageType
}




export const Dialogs: React.FC<DialogType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = props.dialogsPage.message.map(m => <Message message={m.message} id={m.id}/>)


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

