import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance.js';
import DisplayBalances from './components/DisplayBalances.js';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { createStore, combineReducers } from 'redux'

function App() {

	const [entries, setEntries] = useState(initialEntries);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpese] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState(null);
	const [incomeTotal, setIncomeTotal] = useState(0)
	const [expenseTotal, setExpenseTotal] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		if(!isOpen && entryId) {
			const index = entries.findIndex(entry => entry.id === entryId)
			const newEntries = [...entries]
			newEntries[index].description = description
			newEntries[index].value = value
			newEntries[index].isExpense = isExpense
			setEntries(newEntries)
			resetEntry()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		let totalIncome = 0, totalExpense = 0;
		entries.map(entry => {
			if(entry.isExpense) return (totalExpense += Number(entry.value))
			else return (totalIncome += Number(entry.value))
		})
		setTotal(totalIncome - totalExpense)
		setIncomeTotal(totalIncome)
		setExpenseTotal(totalExpense)
	}, [entries]);

//////////////////
	const entriesReducer = (state = initialEntries, action) => {
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

	const combinedReducers = combineReducers({
		entries: entriesReducer
	})
	const store = createStore(combinedReducers)

	store.subscribe(() => {
		console.log('store: ', store.getState())
	})

	const payload_add = {
		id: 5, description: 'heloo from redux', value: 100, isExpense: false
	}

	const payload_remove = {
		id: 1
	}

	const addEntryRedux = (payload) => {
		return {type: 'ADD_ENTRY', payload}
	}

	const removeEntryRedux = (id) => {
		return {type: 'REMOVE_ENTRY', payload: {id}}
	}

	store.dispatch(addEntryRedux(payload_add))
	store.dispatch(removeEntryRedux(1))
	store.dispatch(removeEntryRedux(2))
	store.dispatch(removeEntryRedux(3))
	store.dispatch(removeEntryRedux(4))
	store.dispatch(removeEntryRedux(5))

/////////////////

	const deleteEntry = (id) => {
		const result = entries.filter(entry => entry.id !== id)
		setEntries(result)
	}

	const editEntry = (id) => {
		console.log(`edit entry with id ${id}`)
		if(id) {
			const index = entries.findIndex(entry => entry.id === id)
			const entry = entries[index]
			setEntryId(id)
			setDescription(entry.description)
			setValue(entry.value)
			setIsExpese(entry.isExpense)
			setIsOpen(true)
		}
	}

	const addEntry = () => {
		const result = entries.concat({id: entries.length+1, description, value, isExpense})
		setEntries(result)
		resetEntry()
	}

	const resetEntry = () => {
		setDescription('')
		setValue('')
		setIsExpese(true)
	}

  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value={total} title="Your Balance: " size="small" />

			<DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

			<MainHeader title="History" type="h3"/>

			<EntryLines 
				entries={entries} 
				deleteEntry={deleteEntry} 
				setIsOpen={setIsOpen}
				editEntry={editEntry}
			/>

			<MainHeader title="Add New Transaction" type="h3"/>

			<NewEntryForm 
				addEntry={addEntry}
				description={description} setDescription={setDescription} 
				value={value} setValue={setValue} 
				isExpense={isExpense} setIsExpese={setIsExpese}
			/>

			<ModalEdit 
				isOpen={isOpen} 
				setIsOpen={setIsOpen}
				description={description} setDescription={setDescription} 
				value={value} setValue={setValue} 
				isExpense={isExpense} setIsExpese={setIsExpese}
			/>

		</Container>
  );
}

export default App;

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
