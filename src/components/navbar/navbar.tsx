import * as React from 'react';
import queryString from 'query-string';
import { createCn } from 'bem-react-classname';
import { NavLink, useLocation } from 'react-router-dom'

import './navbar.scss';

const cn = createCn('navbar');

function getActiveClass(currentRoute:string, route:string) {
    return currentRoute === route ? 'active' : ''
}

export const Navbar = React.memo(() => {
    const location = useLocation();
    const values = queryString.parse(location.search);
    let router = values.router?.toString() || '';

    return (
        <div className={ cn() }>
            <NavLink activeClassName={getActiveClass(router, 'calculator')} to={ '/f-mobile-timers?router=calculator' }>OVR Calculator</NavLink>
            <NavLink activeClassName={getActiveClass(router, 'timers')} to={ '/f-mobile-timers?router=timers' }>Timers</NavLink>
            {/*<NavLink activeClassName={getActiveClass(router, 'chemistry')} to={ '/fmt?router=chemistry' }>Chemistry Groups</NavLink>*/}
            <NavLink activeClassName={getActiveClass(router, 'changelog')} exact={ true } to={ '/f-mobile-timers?router=changelog' }>Changelog</NavLink>
        </div>
    );
});
