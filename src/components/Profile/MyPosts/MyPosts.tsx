import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
// type MyPostsType = {
//     posts: Array<PostsType>
// }

type MyPostsType = {
    state: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {


let postsElement = props.state.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

let addPost = () => {
    if(newPostElement.current) {
    props.addPost(newPostElement.current.value)
    newPostElement.current.value = ''}}


    return <div className={s.postsBlock}>
       <h3> My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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
