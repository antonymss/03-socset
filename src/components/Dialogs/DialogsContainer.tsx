import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {Dispatch} from "redux";


let mapStateToProps = (state:StateType)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch)=>{
return{
    updateNewMessageBody:(text: string)=>{dispatch(updateNewMessageBodyCreator(text))},
    sendMessage:()=>{dispatch(sendMessageCreator())}
}
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)