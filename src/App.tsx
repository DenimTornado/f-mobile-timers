import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EventsPage } from './containers/events-page/events-page';
import { TimersPage } from './containers/timers-page/timers-page';
import { Logo } from './components/logo/logo';
// import { Navbar } from './components/navbar/navbar';
import { createCn } from 'bem-react-classname';

import './App.scss';

const cn = createCn('App');

function App() {
    return (
        <div className="App">
            <div className={ cn('header') }>
                <div className='inner'>
                    <Logo/>
                    {/*<Navbar/>*/}
                </div>
            </div>
            <div className={ cn('content') }>
                <div className='inner'>
                    <Router>
                        <Switch>
                            <Route exact={ true } path={ '/' }>
                                <TimersPage/>
                            </Route>
                            <Route exact={ true } path={ '/events' }>
                                <EventsPage/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
