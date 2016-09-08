import React from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { createStore } from 'redux'
import reducer from './reducers/Camera'

let store = createStore(reducer)

render((
    <Provider store={store}>
        <Router history = {browserHistory} >
            <Route path = "/" component = {Game}/>
        </Router>
    </Provider>
), document.getElementById('app'));
