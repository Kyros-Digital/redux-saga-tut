import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance.js';
import DisplayBalances from './components/DisplayBalances.js';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';


function App() {
  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value="2,550.53" title="Your Balance: " size="small" />

			<DisplayBalances />

			<MainHeader title="History" type="h3"/>

			<EntryLine description="Income" value="$10"/>
			<EntryLine description="Expense" value="$10" isExpense/>

			<MainHeader title="Add New Transaction" type="h3"/>

			<NewEntryForm />

		</Container>
  );
}

export default App;
