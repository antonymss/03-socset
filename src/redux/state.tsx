import {ChangeEvent} from "react";

export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _callSubscriber: (state: StateType) => void
    subscribe: any
    getState: () => StateType
    dispatch: (action:ActionType)=>void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string

}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 20},
                {id: 2, message: 'It\'s my first post?', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        debugger
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if (action.type === ADD_POST) {
            {
                let newPost: PostsType = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.message.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }

    }
}
export let addPostActionCreator = () => ({type: ADD_POST})as const
export let updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value}as const
}

export default store











