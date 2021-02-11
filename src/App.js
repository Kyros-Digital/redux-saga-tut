import { useState } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance.js';
import DisplayBalances from './components/DisplayBalances.js';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';


function App() {

	const [entries, setEntries] = useState(initialEntries);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpese] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const deleteEntry = (id) => {
		const result = entries.filter(entry => entry.id !== id)
		setEntries(result)
	}

	const editEntry = (id) => {
		console.log(`edit entry with id ${id}`)
		if(id) {
			const index = entries.findIndex(entry => entry.id === id)
			const entry = entries[index]
			setDescription(entry.description)
			setValue(entry.value)
			setIsExpese(entry.isExpense)
			setIsOpen(true)
		}
	}

	const addEntry = (description, value, isExpense) => {
		const result = entries.concat({id: entries.length+1, description, value, isExpense})
		setEntries(result)
	}

  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value="2,550.53" title="Your Balance: " size="small" />

			<DisplayBalances />

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
		value: '$1000.00',
		isExpense: false
	},
	{
		id: 2,
		description: 'Water Bill',
		value: '$133.43',
		isExpense: true
	},
	{
		id: 3,
		description: 'Rent',
		value: '$650.00',
		isExpense: true
	},
	{
		id: 4,
		description: 'Power bill',
		value: '$82.15',
		isExpense: true
	},
]
