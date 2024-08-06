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

const LeftPanel = ({ notes, onAddNote, onSelectNote }) => {
  return (
    <div className="left-panel">
      <h1>Pocket Notes</h1>
      <ul>
        {notes.map((note, index) => (
          note && note.name ? (
            <li key={index} onClick={() => onSelectNote(note)}>
              <div className="logo" style={{ backgroundColor: note.color || '#ffffff' }}>
                {note.name.split(' ').map(word => word[0]).join('')}
              </div>
              {note.name}
            </li>
          ) : null
        ))}
      </ul>
      <button onClick={onAddNote}>+</button>
    </div>
  );
};

export default LeftPanel;
