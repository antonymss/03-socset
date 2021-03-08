import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";


type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => {
  return {isAuth: state.auth.isAuth}}

 export function withAuthRedirect<T>(Component: ComponentType<T>) {

    class RedirectComponent extends React.Component<mapStateToPropsForRedirectType> {

        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to = '/login'/>
            return <Component {...restProps as T}
            />
        }
    }



     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
