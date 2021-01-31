import * as React from 'react';
import { createCn } from 'bem-react-classname';
import { Group } from '../../components/group/group';
import { Groups } from '../../constants/groups'

import './chemistry-groups.scss';

const cn = createCn('chemistry-groups');

export const ChemistryGroups = React.memo(() => {
    return (
        <div className={ cn() }>
            <h1>
                Regional Chemistry Groups
            </h1>
            <div className={ cn('content') }>
                {Groups.map((group) => {
                    return <Group group={group} />
                })}
            </div>
        </div>
    );
});
