import {ActionType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type userType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city:string,
        country:string
    }
    photoUrl: string
}
export type UsersType = {
    users : userType []
}


let initialState = {
    users: [

    ],

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
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}
export let followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export let unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export let setUsersAC = (users: userType []) => ({type: SET_USERS, users}) as const