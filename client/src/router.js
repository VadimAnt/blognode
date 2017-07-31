import React from 'react';
import { history } from './createStore';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './components/home/home';
import BlogList from "./components/blog/BlogList";
import BlogSingle from "./components/blog/BlogSingle";

export default (
    <Router history={history}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/blog" component={BlogList} />
            <Route path="/blog/:id" component={BlogSingle} exact />
        </Route>
    </Router>
);