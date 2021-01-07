import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://www.w3schools.com/w3css/img_lights.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
}
