// import React, { useEffect, useState } from 'react';
// import notes from '../images/notes.png'
// import lock from '../images/lock.png'
// import send from '../images/send.png'

// const RightPanel = ({ note }) => {
//   const [text, setText] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (note) {
//       const savedMessages = JSON.parse(localStorage.getItem(`messages-${note.id}`)) || [];
//       setMessages(savedMessages);
//     }
//   }, [note]);


//   // const handleSend = () => {
//   //   setMessages([...messages, text]);
//   //   setText('');
//   // };


//   const handleSend = () => {
//     const newMessage = { text, timestamp: new Date() };
//     const updatedMessages = [...messages, newMessage];
//     setMessages(updatedMessages);
//     localStorage.setItem(`messages-${note.id}`, JSON.stringify(updatedMessages));
//     setText('');
//   };



//   if (!note) {
//     return <><div className="right-panel"><img src={notes} alt="notes" /></div>
//       <h1 className='right-pannel-hedding'>Pocket Notes</h1>
//       <p className='right-pannel-content'>Send and receive messages without keeping your phone online.<br />
//         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
//         <p className='right-pannel-semicontent'><img src={lock} height="20" width="20" alt="lock"/>end-to-end encrypted</p>
//         </>;
//   }

//   return (
//     <div className="right-panel">
//       <h2>{note.name}</h2>
//       <div className="messages">
//         {messages.map((message, index) => (
//           <div key={index} className="message-card">{message}
//           <p>{message.text}</p>
//           <small>{new Date(message.timestamp).toLocaleString()}</small>
//           </div>
//         ))}
//       </div>
//       <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
//       <button onClick={handleSend}><img src={send} height="90" weight="90"/></button>

//     </div>
//   );
// };

// export default RightPanel;





import React, { useState, useEffect } from 'react';
import notes from '../images/notes.png';
import lock from '../images/lock.png';
import send from '../images/send.png';

const RightPanel = ({ note,setIsActive,isActive}) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [color, setColor] = useState('#fff'); // Default color

  useEffect(() => {
    if (note) {
      const savedMessages = JSON.parse(localStorage.getItem(`messages-${note.name}`)) || [];
      console.log(savedMessages, "savedMessages", note.name)
      setMessages(savedMessages);

      // Fetch note color from local storage if available
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      const noteData = storedNotes.find(n => n.name === note.name);
      if (noteData) {
        setColor(noteData.color);
      }

    }
  }, [note]);


  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true });
  };


  // const getInitials = (name) => {
  //   const words = name.split(' ');
  //   return words.map(word => word[0]).join('').toUpperCase();
  // };

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

  const handleSend = () => {
    const newMessage = { text, timestamp: new Date() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(`messages-${note.name}`, JSON.stringify(updatedMessages));
    setText('');
  };


  if (!note) {
    return (
      <div className={isActive?"d-sm-none":""}>
      
        <div className="right-panel">
          <img src={notes} alt="notes" className='right-panel-mainimg' />
        </div>
        <h1 className="right-pannel-hedding">Pocket Notes</h1>
        <p className="right-pannel-content">
          Send and receive messages without keeping your phone online.<br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
        <p className="right-pannel-semicontent">
          <img src={lock} height="20" width="20" alt="lock" /> end-to-end encrypted
        </p>
      </div>
    );
  }

  return (
    <div className={`right-panel ${isActive ? 'd-sm-none' : ''}`}>
      
      <div className='noteNamLogo'>
    <div onClick={()=>setIsActive(true)} className='backButton'>
    {"<"}
    </div>
        <div className="note-logo" style={{ backgroundColor: color }}>
          {getInitials(note.name)}
         
        </div>
        <div style={{ fontSize: "24px", marginLeft: "30px", marginBottom: "10px", fontWeight: "bold" }}>
          {note.name}
        </div>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message-card">
            <div><div>
            </div>
              <div><p>{message.text}</p></div>
              </div>
              <p className='pTimeandDate'> {formatDate(new Date(message.timestamp))} &nbsp;•&nbsp; {formatTime(new Date(message.timestamp))}</p>

          </div>
        ))}
      </div>
      <div className='textarea-card'>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your text here......'></textarea>
      </div>
      <button onClick={handleSend}>
        <img src={send} height="30" width="30" alt="send" className='sendImg' />
      </button>
    </div>
  );
};

export default RightPanel;

