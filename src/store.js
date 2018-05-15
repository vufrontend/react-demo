import { applyMiddleware, createStore } from 'redux';
import Immutable from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import rootReducer from './reducers';

const initialState = Immutable.Map();

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [
    epicMiddleware
];

if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    middleware.push(createLogger({ collapsed: true }));
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
);

if (module.hot) {
    module.hot.accept(() => {
        const nextRootReducer = rootReducer;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;
