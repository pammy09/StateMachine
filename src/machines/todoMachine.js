import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCWEA2YAxAIIAipA2gAwC6ioADqrNstqgHb0gAeiAjAGYqmAOwAOUQFYqowQDZ5-AEzyAnPIA0IAJ6JBo5ZgAsUwf3XKpa5WqniAvg+1oMmAIYQI2DlEIBlYgA1AFFqOiQQJhY2Tm4+BCtRTDVBNSpxKVV+KRlBbT1E0WNMFTz+cWVjDWN+Jxd0LE9vX0IAJRCAWQB5UPDuaNZ2LkiEqxEZKio00X5RaempAoFRZPEqeVV0qjV08VT6kFcmrx8-AFUABVJiABUw2gHmIbjRxCsjavUc+UF9n+WCHE-BMkhkSjUxkyBmMh2OHlOrQAwsQAHJIkIAGX6kUGsRGoASQhEEmksgUSi2Wl0+mUILUEgsaVkDL+TmcIA46Dg3GOTxiw3iiAAtNTCqK4Y0cPgwPyXgTeIhjMpAQoSuIlDJlMoMgZBFJJW5mmc5fihYlrJgquopmo5sYNmL9NITMYDJD5A6qPwDuygA */
  createMachine({
    id: "todo",
    initial: "idle",
    context: {
      todos: [],
    },
    states: {
      idle: {
        on: {
          ADD: "adding",
        },
      },
      adding: {
        on: {
          SAVE: {
            actions: assign({
              todos: (context, event) => [...context.todos, event.todos],
            }),
          },

          REMOVE: {
            actions: assign({
              todos: (context, event) => event.todos,
            }),
          },

          UPDATE: {
            actions: assign({
              todos: (context, event) => event.todos,
            }),
          },
          CANCEL: "idle",
        },
      },
    },
  });

// function TodoList() {
//   const [state, send] = useMachine(todoMachine);
//   const [todos, setTodos] = useState();

//   const handleChange = (e) => {
//     setTodos(e.target.value);
//   };
//   const handleSave = (e) => {
//     send("SAVE", {
//       todos: todos,
//     });

//     console.log(state.context.todos);
//   };
//   return (
//     <div>
//       <h1>To-do List</h1>

//       {state.context.todos.map((todo) => (
//         <p>{todo}</p>
//       ))}

//       <button onClick={() => send("ADD")}>Add Task</button>

//       {state.matches("adding") && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter task name"
//             onChange={handleChange}
//           />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={() => send("CANCEL")}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// }

export default todoMachine;
