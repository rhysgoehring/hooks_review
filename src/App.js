import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';
import useAbortableFetch from 'use-abortable-fetch';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const { data, loading } = useAbortableFetch(
    'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  );

  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1
        style={animationProps}
        onClick={() => ref.current.classList.add('new-fake_class')}
      >
        Level Up Dishes
      </animated.h1>
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
      {data &&
        data.map(dish => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
    </div>
  );
};

export default App;
