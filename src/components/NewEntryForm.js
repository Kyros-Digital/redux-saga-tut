import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm';

function NewEntryForm({addEntry, description, value, isExpense, setDescription, setValue, setIsExpese}) {

	return (
		<Form unstackable>	
			<EntryForm 
				description={description} setDescription={setDescription} 
				value={value} setValue={setValue} 
				isExpense={isExpense} setIsExpese={setIsExpese}
			/>

			<ButtonSaveOrCancel 
				addEntry={addEntry} 
				description={description} 
				value={value} 
				isExpense={isExpense}
			/>
		</Form>
	)
}

export default NewEntryForm