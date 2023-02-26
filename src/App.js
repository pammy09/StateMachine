import { useMachine } from "@xstate/react";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Note from "./components/Note";
import Register from "./components/Register";
import Todo from "./components/Todo";

import './styles/app.scss'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/note" element={<Note />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
