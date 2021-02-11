import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm';
import {useDispatch} from 'react-redux'
import { addEntryRedux } from '../actions/entries.actions';

function NewEntryForm() {

	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpese] = useState(true);
	const dispatch = useDispatch()

	const addEntry = () => {
		dispatch(addEntryRedux({
			id: 5,
			description,
			value,
			isExpense
		}))
		setDescription('')
		setValue('')
		setIsExpese(true)
	}

	return (
		<Form unstackable>	
			<EntryForm 
				description={description} setDescription={setDescription} 
				value={value} setValue={setValue} 
				isExpense={isExpense} setIsExpese={setIsExpese}
			/>

			<ButtonSaveOrCancel 
				addEntry={addEntry} 
			/>
		</Form>
	)
}

export default NewEntryForm