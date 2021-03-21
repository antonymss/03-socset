import {ActionType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {getAuthUserData, ThunkType} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// export type AuthType = {
//     id: null | number,
//     email: null | string,
//     login: null | string,
//     isAuth: boolean
//     userId: number
// }

let initialState = {
    // id: null,
    // email: null,
    // login: null,
    // isAuth: false,
    // userId: 1
    initialized: false,

}
// type AppReducerType = {
//     initialized: boolean
//     getAuthUserData: () => void
// }
export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}
export let initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
}) as const

export const initializeApp = ():ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}

