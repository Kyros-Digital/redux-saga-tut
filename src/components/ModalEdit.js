import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpese}) {
	return (
		<Modal open={ isOpen }>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm 
					description={description} setDescription={setDescription} 
					value={value} setValue={setValue} 
					isExpense={isExpense} setIsExpese={setIsExpese}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Close</Button>
			</Modal.Actions>
		</Modal>
	)
}

export default ModalEdit