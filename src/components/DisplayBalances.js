import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
	return (
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
	)
}

export default DisplayBalances