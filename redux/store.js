import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleware = [];
middleware.push(thunkMiddleware);
const loggerMiddleware = createLogger();
middleware.push(loggerMiddleware);

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(...middleware),
    ),
);

export default store;