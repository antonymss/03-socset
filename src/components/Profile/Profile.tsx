import React from 'react';
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type PropsType = {
    profile: ProfileType | null
}

export const Profile = (props: PropsType) => {
    debugger
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>

    </div>
}
