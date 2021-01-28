import React from 'react';
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreReduxType} from "../../redux/redux-store";


type ProfileType = {
    store: StoreReduxType


}

export const Profile: React.FC<any> = (props) => {
    debugger
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            // store={props.store}

        />

    </div>
}
