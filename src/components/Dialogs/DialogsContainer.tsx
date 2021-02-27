import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch)=>{
return{
    updateNewMessageBody:(text: string)=>{dispatch(updateNewMessageBodyCreator(text))},
    sendMessage:()=>{dispatch(sendMessageCreator())}
}
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)