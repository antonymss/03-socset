import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch:Dispatch)=>{
return{
    updateNewMessageBody:(text: string)=>{dispatch(updateNewMessageBodyCreator(text))},
    sendMessage:()=>{dispatch(sendMessageCreator())}
}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)