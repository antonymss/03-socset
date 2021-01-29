import React from 'react';
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {StoreReduxType} from "../../redux/redux-store";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


type ProfileType = {
    store: StoreReduxType


}

export const Profile: React.FC<any> = (props) => {
    debugger
    return <div>
        <ProfileInfo/>
        <MyPostContainer />

    </div>
}
