import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import  {ActionType, ProfilePageType} from "../../redux/state";



type ProfileType = {
    dispatch: (action:ActionType)=>void

    profilePage: ProfilePageType

    newPostText: string

}

export const Profile: React.FC<ProfileType> = (props) => {
    debugger
    return <div>
        <ProfileInfo/>
        <MyPosts

            dispatch={props.dispatch}
            posts={props.profilePage.posts}
                 newPostText={props.newPostText}/>

    </div>
}
