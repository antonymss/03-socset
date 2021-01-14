import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";
import {ActionType, PostsType, StoreType} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostsType>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    // store: StoreType
    dispatch: (action:ActionType)=>void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {


    // let postsElement = props.store.getState().profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let postsElement = props.store.getState().profilePage.posts.map(p => <Post message={p.message}
                                                                               likesCount={p.likesCount}/>)

    let addPost = () => {
        // props.store.addPost()
        props.dispatch({type:'ADD-POST'})
    }


    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.store.updateNewPostText(e.currentTarget.value)
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: any })
    }

    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.store.getState().profilePage.newPostText}/>
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
