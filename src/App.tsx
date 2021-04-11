import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


// export type AppType = {
//     store: StoreReduxType
//     state: StateType
//     dispatch: (action: ActionType) => void
//
// }

type AppType = {
    initializeApp: () => void
    initialized: any
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>

        );

    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
