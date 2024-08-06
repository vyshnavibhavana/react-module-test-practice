import React, { useState } from 'react';
import notes from '../images/notes.jpg'

const RightPanel = ({ note }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    setMessages([...messages, text]);
    setText('');
  };

  if (!note) {
    return <div className="right-panel"><img src={notes} alt="placeholder" /></div>;
  }

  return (
    <div className="right-panel">
      <h2>{note.name}</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button onClick={handleSend}>Send</button>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message-card">{message}</div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
