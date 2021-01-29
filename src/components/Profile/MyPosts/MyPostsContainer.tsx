import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";
import {Dispatch} from "redux";


let mapStateToPropos = (state: StateType)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch)=>{
    return{
        addPost: ()=>{dispatch(addPostActionCreator())},
        updateNewPostText:(e: ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateNewPostTextActionCreator(e))}
    }
}

export const MyPostContainer = connect(mapStateToPropos,mapDispatchToProps)(MyPosts)