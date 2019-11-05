import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

function useTitleInput(initalValue) {
  const [value, setValue] = useState('');
  useEffect(() => {
    document.title = value;
  }, [value]);
  return [value, setValue];
}

export default App;
