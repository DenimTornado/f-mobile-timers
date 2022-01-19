import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EventsPage } from './containers/events-page/events-page';
import { TimersPage } from './containers/timers-page/timers-page';
import { ChemistryGroups } from './containers/chemistry-groups/chemistry-groups';
import { Logo } from './components/logo/logo';
import { Navbar } from './components/navbar/navbar';
import { NavLink } from 'react-router-dom'
import { createCn } from 'bem-react-classname';

import './App.scss';
import { CalculatorPage } from './containers/calculator-page/calculator-page';

const cn = createCn('App');

function App() {
    return (
        <div className="App">
            <Router>
            <div className={ cn('header') }>
                <div className='inner'>
                    <NavLink exact={ true } to={'/fmt'} ><Logo/></NavLink>
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
                            <Route exact={ true } path={ '/fmt/calculator' }>
                                <CalculatorPage/>
                            </Route>
                        </Switch>

                </div>
            </div>
            </Router>
        </div>
    );
}

export default App;
