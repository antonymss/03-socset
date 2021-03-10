import React from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType={
    profile: ProfileType | null
}

export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        {/*<div>*/}
        {/*    <img src='https://www.w3schools.com/w3css/img_lights.jpg'/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
           <ProfileStatus status={'Hello MY FRIENDS'}/>
        </div>

    </div>
}
