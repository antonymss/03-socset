import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";
import {ActionType, PostsType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e))
    }
    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>

}
