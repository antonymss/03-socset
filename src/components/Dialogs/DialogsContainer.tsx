import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // updateNewMessageBody: (text: string) => {
        //     dispatch(updateNewMessageBodyCreator(text))
        // },
        sendMessage: (newMessageBody:any) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)
(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)