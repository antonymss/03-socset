import {ActionType, DialogsPageType} from "./store";
import {ChangeEvent} from "react";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'}],
        newMessageBody: ''
    }

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.message.push({id: 6, message: body})
            return state
        default:
            return state
    }
}
export let sendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export let updateNewMessageBodyCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: e.currentTarget.value} as const
}