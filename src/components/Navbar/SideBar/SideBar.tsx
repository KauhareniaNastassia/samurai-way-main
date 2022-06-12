import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from "react-router-dom";


const SideBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to= "/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to= "/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to= "/news" activeClassName={s.activeLink}>Забота</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to= "/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to= "/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
    </nav>
    )}

export default SideBar;