import React from 'react';
import {Preloader} from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: string
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/*<div>*/}
        {/*    <img src='https://www.w3schools.com/w3css/img_lights.jpg'/>*/}
        {/*</div>*/}
        <h1>{props.profile.fullName}</h1>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    </div>
}
