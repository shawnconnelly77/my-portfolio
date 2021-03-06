import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { experience } from './experience';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}