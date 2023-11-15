import React from 'react';
import { createCn } from 'bem-react-classname';
import './changelog-page.scss';
import { LOG } from './constants';

const cn = createCn('changelog-page');

export const ChangelogPage = React.memo(() => {
    return (
        <div className={ cn() }>
            <div className={cn("version")}>
                Changelog
            </div>
            <div className={cn('contacts')}>
                <div>
                    Contacts:
                </div>
                <div><img src="/f-mobile-timers/img/discord.png" alt=""/>denim3000#0908</div>
            </div>
            <div className={cn("changes")}>
                {LOG.map((log) => {
                    return <div className={cn('row')}>
                        <div className={cn('small-version')}>
                            {
                                log.version
                            }
                        </div>
                        <div className={cn('description')}>
                            <ul>
                                {log.changes.map((change) => {
                                    return <li>- {change}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                })}

            </div>
        </div>
    );
});
