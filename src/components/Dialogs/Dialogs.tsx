import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm";


export type DialogType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (text: string) => void
    sendMessage: (newMessageBody:string) => void
    isAuth: boolean
}


export const Dialogs: React.FC<DialogType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.message.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    // let newMessageBody = state.newMessageBody
    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //
    //     props.updateNewMessageBody(e.currentTarget.value)
    // }

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }
    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageFormRedux = reduxForm<DialogType>({form: 'dialogAddMessageForm'})(AddMessageForm)