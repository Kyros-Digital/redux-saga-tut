import entryTypes from '../actions/entries.actions'


export const entriesReducer = (state = initialEntries, action) => {
	let newEntries;
	switch (action.type) {
		case entryTypes.ADD_ENTRY:
			newEntries = state.concat({...action.payload})
			return newEntries;
		case entryTypes.REMOVE_ENTRY: 
			newEntries = state.filter(entry => entry.id !== action.payload.id)
			return newEntries
		case entryTypes.UPDATE_ENTRY: 
			newEntries = [...state]
			const index = newEntries.findIndex(entry => entry.id === action.payload.id)
			newEntries[index] = {...action.payload.entry}
			return newEntries
			return newEntries
		default:
			return state;
	}
}

var initialEntries = [
	{
		id: 1,
		description: 'Work DOLLAS',
		value: 1000,
		isExpense: false
	},
	{
		id: 2,
		description: 'Water Bill',
		value: 133,
		isExpense: true
	},
	{
		id: 3,
		description: 'Rent',
		value: 650,
		isExpense: true
	},
	{
		id: 4,
		description: 'Power bill',
		value: 82,
		isExpense: true
	},
]