import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";
import {PostsType} from "../../../redux/store";



export type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (e:ChangeEvent<HTMLTextAreaElement>)=> void
    addPost:()=> void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e)
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
