import * as React from 'react';
import { createCn } from 'bem-react-classname';
import { NavLink, Route } from 'react-router-dom'

import './navbar.scss';

const cn = createCn('navbar');

export const Navbar = React.memo(() => {
    return (
        <div className={ cn() }>
            <NavLink exact={ true } to={'/fmt'} >Timers</NavLink>
            <NavLink exact={ true } to={'/fmt/chemistry'} >Chemistry Groups</NavLink>
        </div>
    );
});
