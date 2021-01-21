import {ActionType, DialogsPageType} from "./state";
import {ChangeEvent} from "react";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
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