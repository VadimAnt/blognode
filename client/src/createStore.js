import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, push } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/index';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };

