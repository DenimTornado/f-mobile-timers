import * as React from 'react';
import { createCn } from 'bem-react-classname';
import { NavLink } from 'react-router-dom'

import './navbar.scss';

const cn = createCn('navbar');

export const Navbar = React.memo(() => {
    return (
        <div className={ cn() }>
            <NavLink exact={ true } to={ '/fmt?router=calculator' }>OVR Calculator</NavLink>
            <NavLink exact={ true } to={ '/fmt' }>Timers</NavLink>
            <NavLink exact={ true } to={ '/fmt?router=chemistry' }>Chemistry Groups</NavLink>
            <NavLink exact={ true } to={ '/fmt?router=changelog' }>Changelog</NavLink>
        </div>
    );
});
