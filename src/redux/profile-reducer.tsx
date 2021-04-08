import {ActionType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:
        {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
    photos: {
        small: string
        large: string
    }
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: 'It\'s my first post?', likesCount: 15}
    ] as Array<PostType>,
    // newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

export type InitialProfileStateType = typeof initialState

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: ''
            }
        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}


        default:
            return state
    }
}
export let addPostActionCreator = (newPostText: any) => ({type: ADD_POST, newPostText} as const)
export let setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export let setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export let deletePost = (postId: string | number) => ({type: DELETE_POST, postId} as const)
export let getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        debugger
        dispatch(setUserProfile(response.data))
    })
}
export let getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export let updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
// export let updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     return {type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value} as const
// }