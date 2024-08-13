import React, { useState } from 'react';

const NoteDialog = ({ onAddNote,plusButtonActive }) => {
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
    <div>

    {/* className='plusButton' */}
      <button onClick={() => setOpen(true)}  className={`plusButton ${!plusButtonActive ? 'plus-sm-none' : ''}`}>+</button>
      {open && (
        <div className="dialog">
          <h2>Create Note</h2>
          <div style={{display:'flex'}}>
          <div>
          <label style={{fontSize:"12px"}}>Note Name</label>
          </div>
          <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Note Name"
          />
          </div>
          </div>
          <label style={{fontSize:"12px"}}>Color </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br/>
          <button onClick={handleCreate} style={{width:"60px",height:"30px",fontSize:"10px"}}>Create</button>
          <button onClick={() => setOpen(false)} style={{width:"60px",height:"30px",fontSize:"10px"}}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default NoteDialog;
