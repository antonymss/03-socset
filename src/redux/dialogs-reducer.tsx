import {ActionType, DialogsPageType} from "./store"

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

    let stateCopy

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody : action.text
            }
        case SEND_MESSAGE:
            return  {
                ...state,
                newMessageBody : '',
               message: [...state.message, {id: 7, message: state.newMessageBody}]
            }
        default:
            return state
    }
}
export let sendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export let updateNewMessageBodyCreator = (text: string)  => {
    return {type: UPDATE_NEW_MESSAGE_BODY, text } as const
}