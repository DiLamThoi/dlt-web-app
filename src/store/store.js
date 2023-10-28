// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@dlt-object-base/root/reducer/rootReducer';
import rootSaga from '@dlt-object-base/root/saga/rootSaga';
import fakeData from './fakeData.json';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: fakeData,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
