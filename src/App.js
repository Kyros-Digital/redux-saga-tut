import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance.js';
import DisplayBalances from './components/DisplayBalances.js';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector } from 'react-redux'


function App() {

	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpese] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState(null);
	const [incomeTotal, setIncomeTotal] = useState(0)
	const [expenseTotal, setExpenseTotal] = useState(0)
	const [total, setTotal] = useState(0)
	const entries = useSelector(state => state.entries)

	useEffect(() => {
		if(!isOpen && entryId) {
			const index = entries.findIndex(entry => entry.id === entryId)
			const newEntries = [...entries]
			newEntries[index].description = description
			newEntries[index].value = value
			newEntries[index].isExpense = isExpense
			// setEntries(newEntries)
			resetEntry()
		}

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

	const editEntry = (id) => {
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
		// setEntries(result)
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