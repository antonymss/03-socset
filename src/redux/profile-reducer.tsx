import {ActionType, PostsType, ProfilePageType} from "./state";
import {ChangeEvent} from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST}) as const
export let updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value} as const
}