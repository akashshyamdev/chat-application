import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './ducks/auth';

const reducers = combineReducers({
	auth: authReducer,
});

const composeSetup =
	/*@ts-ignore eslint-disable  */
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? /*@ts-ignore eslint-disable  */
		  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;
/*eslint-enable */

const middleWare = [thunk];

const initialState = {
	auth: {},
};

const store = createStore(reducers, initialState, composeSetup(applyMiddleware(...middleWare)));

export default store;
