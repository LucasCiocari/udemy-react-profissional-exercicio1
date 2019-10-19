import React from 'react'
import NotesContext from "./NotesContext"

const withNotes = (Component) => props => {
	return (
		<NotesContext.Consumer>
			{context => <Component {...props} {...context}/>}
		</NotesContext.Consumer>
	)
}

export default withNotes
