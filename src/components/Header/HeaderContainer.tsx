import React from 'react';
import {Header} from './Header';
import axios from "axios";
import {connect} from "react-redux";
import { setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderContainerType={
    setAuthUserData:(userId: null | number, email: null | string, login: null | string)=> void
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth:boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId,email,login} = response.data.data
                    this.props.setAuthUserData(userId,email,login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateType = {
    id: number | null
    email: string | null
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppStateType): mapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

