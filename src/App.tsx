import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import {MessageType} from "./components/Dialogs/Message/Message";
import {addPost} from "./redux/state";

export type AppType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type profilePageType = {
    posts: Array<PostsType>

}

 export type dialogsPageType = {
    message: Array<MessageType>
    dialogs: Array<DialogsType>
}

export type StateType = {
    state: AppType
    addPost:(postMessage: string) => void
}


const App = (props: StateType) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={addPost}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>

        </div>

    );

}

export default App;
