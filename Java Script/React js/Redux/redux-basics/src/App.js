import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, signin } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello </h1>
      <h1>Counter : {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>add +</button>
      <button onClick={() => dispatch(decrement())}>substract -</button>

      <div>
        <button onClick={() => dispatch(signin())}>
          {isLogged ? 'Logout' : 'Login'}
        </button>
      </div>

      {isLogged ? "Valuable Information I shouldn't see before login" : ""}

    </div>
  );
}

export default App;
