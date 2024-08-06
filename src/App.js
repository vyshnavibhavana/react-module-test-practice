import React, { useState, useEffect } from 'react';

import './App.css';
import LeftPanel from './components/LeftPanel';
import NoteDialog from './components/NoteDialog';
import RightPanel from './components/RightPanel';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="app">
      <LeftPanel notes={notes} onAddNote={addNote} onSelectNote={selectNote} />
      <RightPanel note={selectedNote} />
      <NoteDialog onAddNote={addNote} />
    </div>
  );
};

export default App;
