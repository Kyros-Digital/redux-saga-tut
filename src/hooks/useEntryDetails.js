import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addEntryRedux } from '../actions/entries.actions';
import {v4 as uuidv4} from 'uuid'

function useEntryDetails(desc="", val="", isExp=true) {
	const [description, setDescription] = useState(desc);
	const [value, setValue] = useState(val);
	const [isExpense, setIsExpese] = useState(isExp);
	const dispatch = useDispatch()

	useEffect(() => {
		setDescription(desc)
		setValue(val)
		setIsExpese(isExp)
	}, [description, value, isExpense]);

	const addEntry = () => {
		dispatch(addEntryRedux({
			id: uuidv4(),
			description,
			value,
			isExpense
		}))
		setDescription('')
		setValue('')
		setIsExpese(true)
	}

	return {
		description, setDescription, value, setValue, isExpense, setIsExpese, addEntry
	}
}

export default useEntryDetails