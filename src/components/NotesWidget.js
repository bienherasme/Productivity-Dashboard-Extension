import React, { useState } from "react";

const NotesWidget = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleNotesChange = (e) => setNote(e.target.value);
  function addNote() {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  }
  return (
    <div className="widget">
      <h3>Quick Notes</h3>
      <textarea
        value={note}
        onChange={handleNotesChange}
        placeholder="Type your notes here..."
        className="noteInput"
      />
      <div>
        <button onClick={addNote} className="outlined-button">Add Note</button>
      </div>
      <div>
        <ul className="list">
          {notes.map((note, index) => (
            <li key={index} className="item">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesWidget;
