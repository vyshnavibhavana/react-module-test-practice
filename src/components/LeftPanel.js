import React from 'react';

const LeftPanel = ({ notes, onAddNote, onSelectNote,selectedNote,isActive,plusButtonActive }) => {

  const getInitials = (name) => {
    if (!name) return '';
    const initials = name
      .split(' ')
      .map(word => word[0]) 
      .join('')
      .toUpperCase(); 
  
    return initials.slice(0, 2);
  };
  

  return (

    //className={isActive?"left-panel":"d-sm-none"}
    <div  className={`left-panel ${!isActive ? 'd-sm-none' : ''}`}>
      <div>
      <h1>Pocket Notes</h1>
      </div>
      <ul>
        {notes.map((note, index) => (
          note && note.name ? (
            
            // <li key={index} onClick={() => onSelectNote(note)}>
            <li key={index}
            onClick={() => onSelectNote(note)}
            className={note === selectedNote ? 'selected-note' : ''}
          >
              
              <div className="logo" style={{ backgroundColor: note.color || '#ffffff' }}>
                {/* {note.name.split(' ').map(word => word[0]).join('')} */}
                {getInitials(note.name)}
              </div>
              <div className='noteNameCss'>
              {note.name}
              </div>
            </li>
          ) : null
        ))}
      </ul>
      {/* <button onClick={onAddNote}>+</button> */}
    </div>
  );
};

export default LeftPanel;
