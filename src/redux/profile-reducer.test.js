import React from 'react';
import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: 'It\'s my first post?', likesCount: 15}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)


})
test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('it-kamasutra.com')

})
it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)

})
it('after deleting length of messages shouldn"t be decrement if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)

})