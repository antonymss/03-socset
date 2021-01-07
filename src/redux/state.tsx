import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {rerenderEntireTree} from "../render";

export let  state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20 },
            {id: 2, message: 'It\'s my first post?',likesCount: 15 }
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        message:  [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'},]
    }
    }




    export let addPost = (postMessage: string) => {
    let newPost: PostsType = {
        id:5,
        message: postMessage,
        likesCount: 0
    }
        state.profilePage.posts.push(newPost)
        rerenderEntireTree(state)
    }