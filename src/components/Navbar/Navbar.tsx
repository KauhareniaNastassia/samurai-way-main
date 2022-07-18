import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";


const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to= "/profile" activeClassName={s.activeLink}>Профиль</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to= "/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to= "/users" activeClassName={s.activeLink}>Пользователи</NavLink>
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
            <div>
                <SideBar />
            </div>
        </div>
    )}

export default Navbar;