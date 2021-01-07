import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {profilePageType} from "../../App";
import {addPost} from "../../redux/state";

// export type ProfilePageType = {
//     posts: Array<PostsType>
// }

type ProfileType = {
    state: profilePageType
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.state.posts} addPost={addPost} />
    </div>
}
