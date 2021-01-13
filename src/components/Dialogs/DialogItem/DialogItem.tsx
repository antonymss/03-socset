import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'
import {DialogsType} from "../../../redux/state";

// type DialogItemType = {
//     name: string
//     id: number
// }

export const DialogItem= (props: DialogsType) => {
    let path = '/dialogs/' + props.id;
    // let path = '/dialogs';
    // return <div>
    //     {/*<NavLink activeClassName={s.active} className={s.default} to={path}> {props.name}</NavLink>*/}
    //     <div className={s.default}  > {props.name}</div>
    // </div>

    return <div className={s.default }>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

