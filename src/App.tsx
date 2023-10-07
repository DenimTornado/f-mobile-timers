import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Logo } from './components/logo/logo';
import { Navbar } from './components/navbar/navbar';
import { NavLink } from 'react-router-dom'
import { createCn } from 'bem-react-classname';

import './App.scss';
import { CustomRouter } from './containers/custom-router';

const cn = createCn('App');

function App() {
    return (
        <div className="App">
            <Router>
            <div className={ cn('header') }>
                <div className='inner'>
                    <NavLink exact={ true } to={'/f-mobile-timers?'} ><Logo/></NavLink>
                    <Navbar/>
                </div>
            </div>
            <div className={ cn('content') }>
                <div className='inner'>
                    <Switch>
                        <Route path={ '/f-mobile-timers' }>
                            <CustomRouter/>
                        </Route>
                    </Switch>
                </div>
            </div>
            </Router>
        </div>
    );
}

export default App;
