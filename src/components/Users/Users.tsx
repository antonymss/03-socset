import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: any
    users: userType []
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>

}


export let Users = (props: UsersType) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    //
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    return <div>
        {/*<div>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span className={props.currentPage === p ? styles.selectedPage : ''}*/}
        {/*                     onClick={() => {*/}
        {/*                         debugger*/}
        {/*                         props.onPageChanged(p)*/}
        {/*                     }}>{p}</span>*/}
        {/*    })}*/}

        {/*</div>*/}
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
        {
            props.users.map(u => <User
                    user={u}
                                       followingInProgress={props.followingInProgress}
                                       key={u.id}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
            />
        //         <div key={u.id}>
        //       <span>
        //           <div>
        //                <NavLink to={'/profile/' + u.id}>
        //              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
        //              </NavLink>
        //           </div>
        //
        //           <div>
        //               {u.followed
        //                   ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
        //                       props.unfollow(u.id)
        //                   }}>Unfollow</button>
        //                   : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
        //                       props.follow(u.id)
        //                   }}>Follow</button>}
        //
        //           </div>
        //       </span>
        //         <span>
        //            <span>
        //                <div>{u.name}</div><div>{u.status}</div>
        //            </span>
        //            <span>
        //                <div>{'u.location.country'}</div>
        //                <div>{'u.location.city'}</div>
        //            </span>
        //        </span>
        //     </div>)
        // }
            )}
    </div>
}