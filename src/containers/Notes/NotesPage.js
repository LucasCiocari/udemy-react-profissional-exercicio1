import React, { Fragment } from 'react'

import {NewNote, NoteList, Error} from "../../components"

const NotesPage = ({reloadHasError, onRetry, onAddNote, notes, onMove, onDelete, onEdit}) => {

    if (reloadHasError) {
        return (<Error onRetry={onRetry} />);
    };

    return (
        <Fragment>
            <NewNote onAddNote={onAddNote} />
            <NoteList
                notes={notes}
                onMove={onMove}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        </Fragment>
    )
}

export default NotesPage;