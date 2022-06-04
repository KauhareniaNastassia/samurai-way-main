import React from 'react';
import s from './Navbar.module.css';

/*let s = {
    nav: 'Navbar_item__3oyu0',
    item: 'Navbar_item__6asdh90'
}*/

/* let c1 = "item";
* let c2 = "active";
*   "item active"
* let classes = c1 + " " + c2;
* let classesNew = `&{s.item} ${s.active}`;*/

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
    </nav>
}

export default Navbar;