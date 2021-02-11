import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, setDescription, value, setValue, isExpense, setIsExpese}) {
	return (
		<Fragment>
			<Form.Group>
				<Form.Input 
					icon="tags" width={12} label="Description"
					placeholder="New Shiny thing" 
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<Form.Input
					icon="dollar" iconPosition="left" width={4} label="Value"
					placeholder="100.00" 
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</Form.Group>

			<Segment compact>
				<Checkbox 
					toggle label="is expense" checked={isExpense}
					onChange={() => setIsExpese(oldState => !oldState)}
				/>
			</Segment>
		</Fragment>
	)
}

export default EntryForm