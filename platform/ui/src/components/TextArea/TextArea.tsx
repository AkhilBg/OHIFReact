import React, { useState } from 'react';

const TextArea = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    // This function will be called whenever the user changes the value of the
    // text area.
    setValue(event.target.value);
  };

  const handleAppendText = text => {
    // This function will be called whenever the user clicks the "Append Text"
    // button.
    setValue(value + `${text}\n`);
  };

  return (
    <div>
      <textarea id="textarea" defaultValue={value} onChange={handleChange} />
      <button onClick={handleAppendText}>Append Text</button>
    </div>
  );
};

export default TextArea;
