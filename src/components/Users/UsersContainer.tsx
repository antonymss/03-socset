import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {ReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC,  userType} from "../../redux/users-reducer";

let mapStateToProps = (state: ReducersType ) => {
    return {
        users: state.usersPage.users

    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)