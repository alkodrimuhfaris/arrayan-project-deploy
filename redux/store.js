import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const middleware = [promiseMiddleware];

if (process.env.NEXT_PUBLIC_STAGE === 'DEV') {
  const {logger} = require(`redux-logger`);
  middleware.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middleware));
