import React from 'react';
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: string
}

export const Profile = (props: PropsType) => {
    debugger
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostContainer/>

    </div>
}
