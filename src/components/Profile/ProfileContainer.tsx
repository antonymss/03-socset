import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type MapStatePropsType = {
    profile: ProfileType | null

}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)
    }

    render() {


        return <Profile {...this.props} profile={this.props.profile}/>
    }

}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)
(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))