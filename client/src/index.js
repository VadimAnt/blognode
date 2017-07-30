import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';

import reducer from './reducers/index';
import Home from './components/home/home';
import BlogList from "./components/blog/BlogList";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);




ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path="/" component={Home} />
                <Route path="/blog" component={BlogList} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(push('/'));
store.dispatch(push('/blog'));
registerServiceWorker();
