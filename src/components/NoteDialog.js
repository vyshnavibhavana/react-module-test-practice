import React, { useState } from 'react';

const NoteDialog = ({ onAddNote }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleCreate = () => {
    onAddNote({
      name,
      color,
    });
    setOpen(false);
    setName('');
    setColor('#ff5733');
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>+</button>
      {open && (
        <div className="dialog">
          <h2>Create Note</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Note Name"
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button onClick={handleCreate}>Create</button>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default NoteDialog;
