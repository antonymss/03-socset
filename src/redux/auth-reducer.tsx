import {ActionType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
    userId: number
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userId: 2

}

export const authReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state

    }
}
export let setAuthUserData = (id: null | number, email: null | string, login: null | string, isAuth:boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login,isAuth}
}) as const
export const getAuthUserData = () => async (dispatch:Dispatch) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {userId,email,login} = response.data.data
                dispatch(setAuthUserData(userId,email,login, true))
            }

}
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export const login = (email: string, password:string, rememberMe:boolean):ThunkType => async (dispatch)=> {

    let response = await authAPI.login(email, password, rememberMe)

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                // @ts-ignore
                dispatch(stopSubmit('login',{_error: message}))
            }

}
export const logout = () => async (dispatch:Dispatch) => {
    let response = await authAPI.logout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null, true))
            }

}