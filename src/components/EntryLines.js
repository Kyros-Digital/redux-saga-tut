import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({entries}) {
	return (
		<Container>
			{entries.map((entry, i) => (
				<EntryLine
					key={entry.id}
					entry={entry}
				/>
			))}
		</Container>
	)
}

export default EntryLines