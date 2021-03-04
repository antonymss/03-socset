import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId:number) => void
}

export type ProfilePropsType =MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId){
            userId='2'
        }
        this.props.getUserProfile(+userId)
    }

    render() {

        if( !this.props.isAuth ) return <Redirect to={'/login'}/>

        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)