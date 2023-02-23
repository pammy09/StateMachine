import { useMachine } from "@xstate/react";
import React, { useState } from "react";

import CounterMachine from "./machines/CounterMachine";

const App = () => {
  const [state, send] = useMachine(CounterMachine);
  const [employee, setEmployee] = useState("");

  const handleText = (e) => {
    setEmployee(e.target.value);
  };

  const handleClick = () => {
    send("ADD_EMPLOYEE", {
      employee: employee,
    });

    setEmployee("");
  };

  return (
    <div className="App">
      <h1 className="">{state.context.count}</h1>
      <button onClick={() => send("INCREMENT")}>INCREMENT</button>
      <button onClick={() => send("DECREMENT")}>INCREMENT</button>
      <div className="flex flex-col w-[50%] justify-center items-center">
        <h1 className="text-4xl">Employees</h1>
        <div className="flex flex-col gap-3">
          {state.context.employee.map((e) => (
            <h1 className="text-3xl font-bold">{e}</h1>
          ))}
        </div>

        <input
          type="text"
          placeholder="Add Something"
          onChange={handleText}
          className=""
          value={employee}
        />
        <button onClick={handleClick} className="p-3 bg-blue-500 w-[150px]">
          Add Employee
        </button>
      </div>
    </div>
  );
};
export default App;
