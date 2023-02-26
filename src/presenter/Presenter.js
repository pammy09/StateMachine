/*import React, { useState } from "react";
import todoModel from "../model/todoModel";
import { useMachine } from "@xstate/react";
import Todo from "../components/Todo";

const Presenter = () => {
  const [state, send] = useMachine(todoModel);
  const [todo, setTodo] = useState();
  const [isUpdate, setUpdate] = useState();
  const [toUpdate, setToUpdate] = useState();

  const handleTodo = (e) => {
    setTodo(e.target.value);
    send("ADD");
  };

  const handleAddTodo = () => {
    send("SAVE");
    send("SAVE_EMPLOYEE", {
      todos: todo,
    });

    setTodo("");
  };

  const handleDelete = (value) => {
    send("DELETE");
    const newValues = state.context.todos.filter((data) => {
      return value != data;
    });
    send("DELETE_EMPLOYEE", {
      todos: newValues,
    });
  };

  const handleUpdate = (value) => {
    send("UPDATE");
    setTodo(value);
    setToUpdate(value);
    setUpdate(true);
  };

  const handleSubmitEdit = () => {
    const newData = state.context.todos.map((item) => {
      if (item == toUpdate) {
        return todo;
      } else {
        return item;
      }
    });

    send("UPDATE_EMPLOYEE", {
      todos: newData,
    });

    setTodo("");
    setUpdate(false);
  };

  return (
    <Todo
      todo={todo}
      handleTodo={handleTodo}
      isUpdate={isUpdate}
      handleAddTodo={handleAddTodo}
      handleSubmitEdit={handleSubmitEdit}
      todos={state.context.todos}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete()}
    />
  );
};
export default Presenter;*/
