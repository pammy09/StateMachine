import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCWEA2YAxAIIAipA2gAwC6ioADqrNstqgHb0gAeiAjAGYqmAOwAOUQFYqo-gDZR8-lPkAmADQgAngNEBOTOJXqALP1FVBo02vkBfe1rQZMAQwgRsHKIQDKxABqAKLUdEggTCxsnNx8CGpSppj8+mqpwoLi4oL6UlJaugjGmKaSZfL6+uKmogZSjs7oWB5ePoQAwsQAch3BADJh3FGs7FwR8UIiEtKyCkommjoCaoaCplTK4vpZEmkNjSAc6HDcLqjDzKOxE4gAtPKF91KYVW-vH4KH5zj4YJfRMZxRC2J4ICxqTBqNS5KRyXKmWpUUzfZruTzeKAA67jUDxRIvGRUKgKQRqYnk-SPZbg8SQ8SbNSmPJSfj8Oz6USORxAA */
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
