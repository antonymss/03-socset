import {ActionType} from "./store";
import {ChangeEvent} from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


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
    newPostText: '',
    profile: null as ProfileType | null
}

export type InitialProfileStateType = typeof initialState

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST} as const)
export let setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export let updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value} as const
}