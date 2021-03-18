import React from 'react';
import {Header} from './Header';
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderContainerType = mapDispatchType & mapStateType
type mapDispatchType = {
    getAuthUserData: () => void
    logout: () => void
}
type mapStateType = {
    id: number | null
    email: string | null
    isAuth: boolean
    login: string | null
}


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)

