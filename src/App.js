import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';


function App() {
  return (
    <Container>

			<MainHeader title="Budget" />

			<DisplayBalance value="2,550.53" title="Your Balance: " size="small" />

			<Segment textAlign="center">
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<DisplayBalance value="1,043.43" title="Income: " color="green" size="tiny" />
						</Grid.Column>
						<Grid.Column>
							<DisplayBalance value="645.53" title="Expenses: " color="red" size="tiny" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<MainHeader title="History" type="h3"/>

			<Segment color="red">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">Something</Grid.Column>
						<Grid.Column width={3} textAlign="right"> $10.00</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered/>
							<Icon name="trash"bordered/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment color="green">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">Something Else</Grid.Column>
						<Grid.Column width={3} textAlign="right"> $100.00</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered/>
							<Icon name="trash"bordered/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment color="red">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">Something</Grid.Column>
						<Grid.Column width={3} textAlign="right"> $20.00</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered/>
							<Icon name="trash"bordered/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<MainHeader title="Add New Transaction" type="h3"/>

			<NewEntryForm />

		</Container>
  );
}

export default App;
