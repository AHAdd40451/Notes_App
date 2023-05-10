import React, { useState } from "react";
import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);
  console.log(notes);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isDisabled = filteredNotes.length === 0;
  const placeholderText = isDisabled ? "Add a note first" : "Search notes";

  return (
    <div className="note-container">
      <div className="head-input-container">
        <h2>Notes</h2>

      <input
        type="text"
        className="search_input"
        placeholder={placeholderText}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
            </div>

      <div className="note-container_notes custom-scroll">
        {filteredNotes?.length > 0 ? (
          filteredNotes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
