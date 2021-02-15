import {ActionType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export type userType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string,
        country: string
    }
    photos: any
}
export type UsersType = {
    users: userType []
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false


}

export const usersReducer = (state: UsersType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        default:
            return state
    }
}
export let followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export let unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export let setUsersAC = (users: userType []) => ({type: SET_USERS, users}) as const
export let setCurrentPageAC = (currentPage: number) =>({type:SET_CURRENT_PAGE, currentPage}) as const
export let setUsersTotalCountAC = (totalUsersCount: number) =>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount }) as const
export let toggleIsFetchingAC = (isFetching: boolean) =>({type:TOGGLE_IS_FETCHING, isFetching}) as const