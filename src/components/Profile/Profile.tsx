import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {addPost, ProfilePageType, updateNewPostText} from "../../redux/state";

// export type ProfilePageType = {
//     posts: Array<PostsType>
// }

type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.state.posts}
                 newPostText={props.newPostText}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
    </div>
}
