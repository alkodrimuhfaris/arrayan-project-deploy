import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers';

export default process.env.NEXT_PUBLIC_STAGE === 'DEV'
  ? createStore(rootReducer, applyMiddleware(promiseMiddleware, logger))
  : createStore(rootReducer, applyMiddleware(promiseMiddleware));
