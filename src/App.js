import { useMachine } from "@xstate/react";
import React from "react";
<<<<<<< HEAD
import CounterMachine from "./machines/CounterMachine";

const App = () => {
  const [state, send] = useMachine(CounterMachine);

  return (
    <div className="App">
      <h1>{state.context.count}</h1>
      <button onClick={() => send("INCREMENT")}>INCREMENT</button>
      <button onClick={() => send("DECREMENT")}>INCREMENT</button>
=======
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Login/>
>>>>>>> cabd9413eac1a1d56f51ea5114aea3e2ec1e7a7d
    </div>
  );
};

export default App;
