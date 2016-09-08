import React from 'react';
import Game from './components/Game';
import {
    render
} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

render(( <Router history = {browserHistory} >
        <Route path = "/" component = {Game}/>
    </Router>
), document.getElementById('app'));