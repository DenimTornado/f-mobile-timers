import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EventsPage } from './containers/events-page/events-page';
import { TimersPage } from './containers/timers-page/timers-page';
import { ChemistryGroups } from './containers/chemistry-groups/chemistry-groups';
import { Logo } from './components/logo/logo';
import { Navbar } from './components/navbar/navbar';
import { createCn } from 'bem-react-classname';

import './App.scss';

const cn = createCn('App');

function App() {
    return (
        <div className="App">
            <Router>
            <div className={ cn('header') }>
                <div className='inner'>
                    <Logo/>
                    <Navbar/>
                </div>
            </div>
            <div className={ cn('content') }>
                <div className='inner'>

                        <Switch>
                            <Route exact={ true } path={ '/fmt' }>
                                <TimersPage/>
                            </Route>
                            <Route exact={ true } path={ '/fmt/chemistry' }>
                                <ChemistryGroups/>
                            </Route>
                            <Route exact={ true } path={ '/fmt/events' }>
                                <EventsPage/>
                            </Route>
                        </Switch>

                </div>
            </div>
            </Router>
        </div>
    );
}

export default App;
