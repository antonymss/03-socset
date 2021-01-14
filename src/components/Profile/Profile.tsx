import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import store, {ActionType, ProfilePageType, StoreType} from "../../redux/state";

// export type ProfilePageType = {
//     posts: Array<PostsType>
// }

type ProfileType = {
    dispatch: (action:ActionType)=>void
    // store: StoreType
    profilePage: ProfilePageType
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    debugger
    return <div>
        <ProfileInfo/>
        <MyPosts
            // store={props.store}
            dispatch={props.dispatch}
            posts={props.profilePage.posts}
                 newPostText={props.newPostText}
                 // addPost={store.addPost}
                 // updateNewPostText={store.updateNewPostText}
        />
    </div>
}
