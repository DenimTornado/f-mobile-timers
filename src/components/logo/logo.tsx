import * as React from 'react';
import { createCn } from 'bem-react-classname';

import './logo.scss';

const cn = createCn('logo');

export const Logo = React.memo(() => {
    return (
        <div className={ cn() }>
            <img src="/img/logo.png" alt="" />
        </div>
    );
});
