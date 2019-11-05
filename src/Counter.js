import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1
      };
    case 'subtract':
      return {
        count: state.count - 1
      };
    case 'reset':
      return {
        count: initialState.count
      };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <button>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
};

export default Counter;
