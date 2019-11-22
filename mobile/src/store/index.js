import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';

import rootReducers from './ducks';
import rootSaga from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];
const store = createStore(rootReducers, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
