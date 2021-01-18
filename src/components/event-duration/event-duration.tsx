import React from 'react';
import Moment from 'react-moment';

import './event-duration.scss';

type OwnProps = Partial<{
    now: any;
    duration: any;
}>

export const EventDuration = React.memo<OwnProps>((props) => {
    const { now, duration } = props;

    return (
        <Moment duration={ now }
                date={ duration }
                format="D[d.] hh:mm:ss"
        />
    );
});
