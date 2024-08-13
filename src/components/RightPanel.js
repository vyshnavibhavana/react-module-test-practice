import React, { useState, useEffect } from 'react';
import notes from '../images/notes.png';
import lock from '../images/lock.png';
import send from '../images/send.png';
import arrow from '../images/arrow.png';

const RightPanel = ({ note,setIsActive,isActive}) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    if (note) {
      const savedMessages = JSON.parse(localStorage.getItem(`messages-${note.name}`)) || [];
      console.log(savedMessages, "savedMessages", note.name)
      setMessages(savedMessages);

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
    const initials = name
      .split(' ')
      .map(word => word[0]) 
      .join('')
      .toUpperCase();
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
      // <div className={isActive?"d-sm-none":""}>
      <div className={`right-panel ${isActive ? 'd-sm-none' : ''}`}>
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
   <img src={arrow}/>
    </div>
        <div className="note-logo" style={{ backgroundColor: color }}>
          {getInitials(note.name)}
         
        </div>
        <div style={{ fontSize: "18px", marginLeft: "10px", marginBottom: "10px", fontWeight: "bold" }}>
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

