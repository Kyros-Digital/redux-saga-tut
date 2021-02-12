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

	const [incomeTotal, setIncomeTotal] = useState(0)
	const [expenseTotal, setExpenseTotal] = useState(0)
	const [total, setTotal] = useState(0)
	const [entry, setEntry] = useState()
	const {isOpen, id} = useSelector(state => state.modals)
	const entries = useSelector(state => state.entries)

	useEffect(() => {
		const index = entries.findIndex(entry => entry.id === id)
		setEntry(entries[index])
	}, [isOpen, id]);

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

  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value={total} title="Your Balance: " size="small" />

			<DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

			<MainHeader title="History" type="h3"/>

			<EntryLines entries={entries} />

			<MainHeader title="Add New Transaction" type="h3"/>

			<NewEntryForm />

			<ModalEdit isOpen={isOpen} {...entry} />

		</Container>
  );
}

export default App;