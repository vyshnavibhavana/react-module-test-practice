// import React from 'react';

// const LeftPanel = ({ notes, onAddNote, onSelectNote }) => {

//     console.log(onAddNote)
//   return (
//     <div className="left-panel">
//       <h1>Pocket Notes</h1>
//       {/* <ul>
//         {notes.map((note, index) => (
//           <li key={index} onClick={() => onSelectNote(note)}>
//             <div className="logo" style={{ backgroundColor: note.color }}>
//               {note.name.split(' ').map(word => word[0]).join('')}
//             </div>
//             {note.name}
//           </li>
//         ))}
//       </ul> */}

// <ul>
//         {notes.map((note, index) => (
//           note && (
//             <li key={index} onClick={() => onSelectNote(note)}>
//               <div className="logo" style={{ backgroundColor: note.color || '#ffffff' }}>
//                 {note.name.split(' ').map(word => word[0]).join('')}
//               </div>
//               {note.name}
//             </li>
//           )
//         ))}
//       </ul>
//       <button onClick={() => onAddNote()}>+</button>
//     </div>
//   );
// };

// export default LeftPanel;



import React from 'react';

const LeftPanel = ({ notes, onAddNote, onSelectNote,selectedNote,isActive }) => {

  const getInitials = (name) => {
    if (!name) return '';
    // Split the name into words, map each word to its first letter, and join the first two initials
    const initials = name
      .split(' ')
      .map(word => word[0]) // Get the first letter of each word
      .join('')
      .toUpperCase(); // Convert to uppercase for consistency
  
    // Return only the first two initials
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
