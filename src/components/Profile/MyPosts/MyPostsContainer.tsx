import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionType, PostsType} from "../../../redux/store";
import {StoreReduxType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerType = {
    store: StoreReduxType
    // dispatch: (action: ActionType) => void
    // posts: Array<PostsType>
    // newPostText: string
}

export const MyPostsContainer: React.FC<any> = () => {
    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(e))
    // }
    return <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(updateNewPostTextActionCreator(e))
                    }

                    return <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}
                        />
                }
            }
    </StoreContext.Consumer>

}