import React, { useState, useContext } from 'react';
import { UserContext } from './App';

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  const { user } = useContext(UserContext);
  console.log('user', user);
  if (!user) return null;

  return (
    <div>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  );
};

export default Toggle;

// import React, { Component } from "react";

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
