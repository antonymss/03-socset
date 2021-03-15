import {ActionType} from "./store"

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ] as Array<DialogsType>,
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'}] as Array<MessageType>

    }

    export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {


    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return  {
        //         ...state,
        //         // newMessageBody : action.text
        //     }
        case SEND_MESSAGE:
            return  {
                ...state,
               message: [...state.message, {id: 7, message: action.newMessageBody}]
            }
        default:
            return state
    }
}
export let sendMessageCreator = (newMessageBody:any) => ({type: SEND_MESSAGE, newMessageBody}) as const
// export let updateNewMessageBodyCreator = (text: string)  => {
//     return {type: UPDATE_NEW_MESSAGE_BODY, text } as const
// }