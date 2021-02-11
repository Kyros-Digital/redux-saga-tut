
export const reducer = (state = initialEntries, action) => {
	let newEntries;
	switch (action.type) {
		case 'ADD_ENTRY':
			newEntries = state.concat({...action.payload})
			return newEntries;
		case 'REMOVE_ENTRY': 
			newEntries = state.filter(entry => entry.id !== action.payload.id)
			return newEntries
		default:
			return state;
	}
}

var initialEntries = [
	{
		id: 1,
		description: 'Work income',
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