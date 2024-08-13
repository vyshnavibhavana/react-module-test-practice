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
  const [plusButtonActive, setPlusButtonActive] = useState(true);
  const [isMobileView, setIsMobileView] = useState(window.matchMedia("(max-width: 320px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.matchMedia("(max-width: 320px)").matches);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
    console.log('Loaded notes from localStorage:', savedNotes);
  }, []);

  const addNote = (newNote) => {
    const newNoteS = { id: Date.now(), name: `New Note ${notes.length + 1}`, color: '#ffffff' };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    // setIsActive(false);
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
     {/* { isActive &&
      <NoteDialog onAddNote={addNote} plusButtonActive={plusButtonActive}/>
      } */}
       {isActive &&  isMobileView && (
        <NoteDialog onAddNote={addNote} plusButtonActive={plusButtonActive}/>
      )}
      {!isMobileView && (
        <NoteDialog onAddNote={addNote} plusButtonActive={plusButtonActive}/>
      )}
    </div>
  );
};

export default App;
