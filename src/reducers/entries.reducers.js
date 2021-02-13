import entryTypes from '../actions/entries.actions'


export const entriesReducer = (state = initialEntries, action) => {
	let newEntries;
	switch (action.type) {
		case entryTypes.POPULATE_ENTRIES:
			return action.payload
		case entryTypes.ADD_ENTRY:
			newEntries = state.concat({...action.payload})
			return newEntries;
		case entryTypes.REMOVE_ENTRY: 
			newEntries = state.filter(entry => entry.id !== action.payload.id)
			return newEntries
		case entryTypes.POPULATE_ENTRIES_DETAILS:
		case entryTypes.UPDATE_ENTRY: 
			newEntries = [...state]
			const index = newEntries.findIndex(entry => entry.id === action.payload.id)
			newEntries[index] = {...newEntries[index], ...action.payload.entry}
			return newEntries
		default:
			return state;
	}
}

var initialEntries = []