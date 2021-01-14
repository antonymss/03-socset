import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType, StoreType} from "./redux/state";


export type AppType = {
    store: StoreType
    state: StateType
    addPost: () => void
    updateNewPostText:  (text: string) => void

}
const App = (props: AppType) => {
    debugger
// const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile
                    store={props.store}
                    // state={props.state.profilePage}
                    // newPostText={props.state.profilePage.newPostText}
                    // addPost={props.addPost}
                    // updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>

        </div>

    );

}

export default App;
