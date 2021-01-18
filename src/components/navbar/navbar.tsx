import * as React from 'react';
import { createCn } from 'bem-react-classname';

import './navbar.scss';

const cn = createCn('navbar');

export const Navbar = React.memo(() => {
    return (
        <div className={ cn() }>
            <a href="/">Timers</a>
            <a href="/events">Events</a>
        </div>
    );
});
