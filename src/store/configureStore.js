import { applyMiddleware, combineReducers, createStore } from "redux"
import {entriesReducer} from '../reducers/entries.reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { modalsReducer } from "../reducers/modals.reducers"
import createSagaMiddleware from 'redux-saga'
import { testSaga } from "../sagas/testSaga"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const configureStore = () => {
	const store = createStore(
		combineReducers({
			entries: entriesReducer,
			modals: modalsReducer,
		}), composeWithDevTools(applyMiddleware(...middlewares))
	);
	sagaMiddleware.run(testSaga)
	return store;
}