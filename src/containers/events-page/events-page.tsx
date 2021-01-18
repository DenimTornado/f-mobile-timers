import * as React from 'react';
import { createCn } from 'bem-react-classname';

import './events-page.scss';

const cn = createCn('events-page');

export const EventsPage = React.memo(() => {
    return (
        <div className={ cn() }>
            Events
        </div>
    );
});
