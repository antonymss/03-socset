import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type MyPostsType = {
    posts: Array<PostType>
    // newPostText: any
    // updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: (values:any) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let onAddPost = (values:any) => {
        props.addPost(values.newPostText)
    }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewPostText(e)
    // }
    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

        </div>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>

}
const AddNewPostForm: React.FC<InjectedFormProps<MyPostsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'  name='newPostText' />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<MyPostsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)