let rerenderEntireTree = () =>{
    console.log('dgd')
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}


export const state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: 'It\'s my first post?', likesCount: 15}
        ],
        newPostText: ''

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
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
            {id: 5, message: 'YO'},]
    }
}


export const addPost = () => {
    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}