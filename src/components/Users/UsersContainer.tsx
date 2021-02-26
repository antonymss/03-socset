import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    userType, toggleFollowingProgress, getUsers,
} from "../../redux/users-reducer";
import {Users} from "./Users";

import {Preloader} from '../common/Preloader/Preloader';


export type UsersContainerType = {
    users: userType []
    setUsers: (users: Array<userType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: any
    setTotalUsersCount: any
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
    getUsers: (currentPage: number,pageSize:number)=> void
}

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress, getUsers
    })
(UsersContainer)