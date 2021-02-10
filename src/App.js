import { useState } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance.js';
import DisplayBalances from './components/DisplayBalances.js';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';


function App() {

	const [entries, setEntries] = useState(initialEntries);

  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value="2,550.53" title="Your Balance: " size="small" />

			<DisplayBalances />

			<MainHeader title="History" type="h3"/>

			<EntryLines entries={entries} />

			<MainHeader title="Add New Transaction" type="h3"/>

			<NewEntryForm />

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
