import { useMachine } from "@xstate/react";
import React from "react";
import CounterMachine from "./machines/CounterMachine";

const App = () => {
  const [state, send] = useMachine(CounterMachine);

  return (
    <div className="App">
      <h1>{state.context.count}</h1>
      <button onClick={() => send("INCREMENT")}>INCREMENT</button>
      <button onClick={() => send("DECREMENT")}>INCREMENT</button>
    </div>
  );
};

export default App;
