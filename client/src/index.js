import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers/index';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createHistory(), store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App} />
                <Route path="/test/:id" />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
