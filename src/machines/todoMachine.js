import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCWEA2YAxAIIAipA2gAwC6ioADqrNstqgHb0gAeiAjAHYAbJn4AOKlKoBmKgFYh8weIA0IAJ6IZMgJyZ54+VX4KATEeEAWK-IC+d9Wgw58RUgFEAMh4AqH6jokECYWNk5uPgQhUQlpWQUlFXUtaMF5TCorYWFBMwl5M2EzWQcndCwIMAI2DihCACUPAFkAeQA1ANpuUNZ2LmCos119QTkpHXlhXR1hFMRxfkwrSQmZKZmZYTKQZywAQwgIbDrCAGViTsCe5j6Iwe0qQTF5YyozeRmRq34reYQzD9MGZBNJJOJBPxDGYdntMIdjqcAMLEABySO812CvXCA1AURiYlWE0S6WSmkQFn0-A+UhEwz0thkDkcIA46Dg3D2NzC-UiiAAtHMKQghbCKq4CDy7njeIgrGZ-jJhmJdOlTJDdMMZuKXFUaicoNLcfyEONMOIrNI9LkLIphakJGZMCppNYqOJpr9dQcjobjXyHmapBarRNdLajPwHdoFQZQSZ+PwZOJdNGWXYgA */
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
