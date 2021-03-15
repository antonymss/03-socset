import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";
import {Dispatch} from "redux";


let mapStateToPropos = (state: StateType)=>{
    return{
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch)=>{
    return{
        addPost: (newPostText:any)=>{dispatch(addPostActionCreator(newPostText))},
        // updateNewPostText:(e: ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateNewPostTextActionCreator(e))}
    }
}

export const MyPostContainer = connect(mapStateToPropos,mapDispatchToProps)(MyPosts)