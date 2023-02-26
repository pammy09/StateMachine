import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import noteModel from "../model/noteModel";

const Note = () => {
  const [state, send] = useMachine(noteModel);
  const [note, setNote] = useState();
  const [isUpdate, setUpdate] = useState();
  const [toUpdate, setToUpdate] = useState();
  const [updateIndex, setUpdateIndex] = useState();

  const handleNote = (e) => {
    setNote(e.target.value);
    if (setNote == "") {
    } else {
      send("ADD");
    }
  };

  const handleAddNote = () => {
    send("SAVE");
    send("SAVE_NOTE", {
      notes: note,
    });

    setNote("");
  };

  const handleDelete = (value, index) => {
    send("DELETE");

    const newValues = state.context.notes;

    newValues.splice(index, 1);

    send("DELETE_NOTE", {
      notes: newValues,
    });
  };

  const handleUpdate = (value, index) => {
    send("UPDATE");
    setNote(value);
    setUpdateIndex(index);
    setToUpdate(value);
    setUpdate(true);
  };

  const handleSubmitEdit = () => {
    const newData = state.context.notes.map((item, index) => {
      if (item == toUpdate && index == updateIndex) {
        return note;
      } else {
        return item;
      }
    });

    send("UPDATE_NOTE", {
      notes: newData,
    });

    setNote("");
    setUpdate(false);
  };

  return (
    <>
      <section className="section">
        <div class="flex flex-col justify-top px-0 py-8 mx-auto md:h-screen lg:py-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              NOTES
            </label>
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 ...">
                <input
                  type="text"
                  name="note"
                  id="note"
                  value={note}
                  onChange={handleNote}
                  class="w-full bg-white-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type something"
                  required=""
                />
              </div>
              <div class="...">
                {!isUpdate ? (
                  <button
                    type="submit"
                    onClick={handleAddNote}
                    class="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Add Note
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmitEdit}
                    class="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Edit Note
                  </button>
                )}
              </div>
            </div>

            {/* Table */}
            <table className="table">
              <tr>
                <th>Note</th>
                <th>Action</th>
              </tr>
              {state.context.notes.map((to, index) => (
                <tr>
                  <td>
                    {to}
                  </td>
                  <td>
                  <button
                    class="updateButton"
                    type="button"
                    onClick={() => handleUpdate(to, index)}
                  >
                    UPDATE
                  </button>
                  <button
                    class="deleteButton"
                      type="button"
                      onClick={() => handleDelete(to, index)}
                  >
                    DELETE
                  </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Note;
