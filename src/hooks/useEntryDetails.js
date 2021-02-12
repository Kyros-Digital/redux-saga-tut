import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import {v4 as uuidv4} from 'uuid'
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(desc="", val="", isExp=true) {
	const [description, setDescription] = useState(desc);
	const [value, setValue] = useState(val);
	const [isExpense, setIsExpese] = useState(isExp);
	const dispatch = useDispatch()

	useEffect(() => {
		setDescription(desc)
		setValue(val)
		setIsExpese(isExp)
	}, [desc, val, isExp]);

	const updateEntry = (id) => {
		dispatch(updateEntryRedux(
			id, 
			{ id, description, value, isExpense }
		))
		dispatch(closeEditModal())
		resetValues()
	}

	const addEntry = () => {
		dispatch(addEntryRedux({
			id: uuidv4(),
			description,
			value,
			isExpense
		}))
		resetValues()
	}

	const resetValues = () => {
		setDescription('')
		setValue('')
		setIsExpese(true)
	}

	return {
		description, setDescription, value, setValue, isExpense, setIsExpese, addEntry, updateEntry
	}
}

export default useEntryDetails