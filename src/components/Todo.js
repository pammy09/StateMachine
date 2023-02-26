import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import todoModel from "../model/todoModel";
const Todo = () => {
  const [state, send] = useMachine(todoModel);
  const [todo, setTodo] = useState();
  const [isUpdate, setUpdate] = useState();
  const [toUpdate, setToUpdate] = useState();
  const [updateIndex, setUpdateIndex] = useState();

  const handleTodo = (e) => {
    setTodo(e.target.value);
    send("ADD");
  };

  const handleAddTodo = () => {
    send("SAVE");
    send("SAVE_NOTE", {
      todos: todo,
    });

    setTodo("");
  };

  const handleDelete = (value, index) => {
    send("DELETE");

    const newValues = state.context.todos;

    newValues.splice(index, 1);

    send("DELETE_NOTe", {
      todos: newValues,
    });
  };

  const handleUpdate = (value, index) => {
    send("UPDATE");
    setTodo(value);
    setUpdateIndex(index);
    setToUpdate(value);
    setUpdate(true);
  };

  const handleSubmitEdit = () => {
    const newData = state.context.todos.map((item, index) => {
      if (item == toUpdate && index == updateIndex) {
        return todo;
      } else {
        return item;
      }
    });

    send("UPDATE_NOTE", {
      todos: newData,
    });

    setTodo("");
    setUpdate(false);
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-amber-500">
        <div class="flex flex-col items-center justify-center px-12 py-12 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-8 md:space-y-6 sm:p-8">
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >NOTES</label>
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  value={todo}
                  onChange={handleTodo}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type note..."
                  required=""
                />
              </div>
              {!isUpdate ? (
                <button
                  type="submit"
                  onClick={handleAddTodo}
                  class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add Note
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmitEdit}
                  class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Edit Note
                </button>
              )}

              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Notes
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.context.todos.map((to, index) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {to}
                        </th>
                        <td class="px-6 py-4">
                          <button
                            type="button"
                            onClick={() => handleDelete(to, index)}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            DELETE
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdate(to, index)}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            UPDATE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
