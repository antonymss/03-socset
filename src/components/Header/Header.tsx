import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

import {HeaderContainerType} from "./HeaderContainer";

export const Header = (props: HeaderContainerType ) => {
    return <header className={s.header}>
        <img
            src='https://yt3.ggpht.com/ytc/AAUvwnhcOYdTa8LLrCrXBvmGL2kd1pP1xiGLChGUaz4KGA=s48-c-k-c0xffffffff-no-rj-mo'/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}



