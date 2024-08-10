import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


import './App.css';
import LeftPanel from './components/LeftPanel';
import NoteDialog from './components/NoteDialog';
import RightPanel from './components/RightPanel';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('notes'));
  //   console.log(savedNotes)
  //   setNotes(savedNotes);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes));
  //   console.log(localStorage.setItem('notes', JSON.stringify(notes)))
  // }, [notes]);

  // // const handleAddNote = (newNote) => {
  // //   const updatedNotes = [...notes, newNote];
  // //   setNotes(updatedNotes);
  // //   localStorage.setItem('notes', JSON.stringify(updatedNotes));
  // // };


  // const addNote = (note) => {
  //   const updatedNotes = [...notes, note];
  //   console.log(updatedNotes,"updatedNotes")
  //   setNotes(updatedNotes);
  //  localStorage.setItem('notes', updatedNotes);
    
  // };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
    console.log('Loaded notes from localStorage:', savedNotes);
  }, []);

  const addNote = (newNote) => {
    const newNoteS = { id: Date.now(), name: `New Note ${notes.length + 1}`, color: '#ffffff' };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setIsActive(false);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    console.log('Saved notes to localStorage:', updatedNotes);
  };


  const selectNote = (note) => {
    setSelectedNote(note);
    setIsActive(false);
  };

  return (
    <div className="app">
      <LeftPanel notes={notes} onAddNote={addNote} onSelectNote={selectNote} selectedNote={selectedNote} isActive={isActive}/>
      <RightPanel note={selectedNote} isActive={isActive} setIsActive={setIsActive}/>
      <NoteDialog onAddNote={addNote}/>
    </div>
  );
};

export default App;
