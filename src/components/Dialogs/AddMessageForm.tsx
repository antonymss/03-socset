import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {DialogType} from "./Dialogs";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<DialogType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button> Send</button>

            </div>
        </form>
    )
}