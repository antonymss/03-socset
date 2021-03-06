import {addPostActionCreator, deletePost, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";


export type StoreType = {
    _state: StateType
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    _callSubscriber: (state: StateType) => void
    subscribe: any
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    // newMessageBody: string

}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    // newPostText: string
    profile: any
    status: string

}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ActionType =
    ReturnType<typeof addPostActionCreator> |
    // ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    // ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof initializedSuccess>|
    ReturnType<typeof deletePost>


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 20},
                {id: 2, message: 'It\'s my first post?', likesCount: 15}
            ],
            // newPostText: '',
            profile: '',
            status:''
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
            // newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    // addPost() {
    //     let newPost: PostsType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     // this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     debugger
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

    }
}
export default store











