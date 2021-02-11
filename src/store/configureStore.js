import { combineReducers, createStore } from "redux"
import {entriesReducer} from '../reducers/entries.reducers'

export const configureStore = () => {
	return createStore(combineReducers({
		entries: entriesReducer
	}))
}