import React from 'react'

const NotesPage = () => {
  return (
    <div>
        <h2>my Notes</h2>
        <ul>
            {NotesPage.map(=>(
                <li key={note.id}>
                <strong>{note.title}</strong>: {note.content}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NotesPage
