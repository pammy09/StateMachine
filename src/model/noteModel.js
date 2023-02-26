import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const noteModel =
  /** @xstate-layout N4IgpgJg5mDOIC5QDsD2AXMA6AlhANmAMQCCAImQNoAMAuoqAA6qw7o6rIMgAeiAjACYArFgDsADjHDqgwRIX8JAZgBsAGhABPRMurKsE2QE5l-JdWMTVwgL63NaTFgCGECDmRQiAZRIA1AFEaeiQQZlZ2Tm4+BGURLEFjVSlFABZVYzFBMU0dOP1DEzMLKxt7RwxsWBcAN09vPyCAfQA5AHkAFWC6bgi2Di4w2LS5LDTqVRFlCX4MrJy8xEF+akTBZWljagzhKWoJCpAnarqGojJAgBlA7pC+lgHo4cQ9sUN+YVUza1U04WE-CWcUEaSwqmokM+cm+yT+RxOWBq9S8RAAqgAFMgkO69ML9KJDUCxN4fL4-VR-AFA7QCMTvIxTL4qCZTcoOY5VLAQMCEdioy43bptLo9UJMR6EmKvbbifRCdKZMTKYFyCSJWYiYxCeSzBFcgCujAgLn53kx2OFHVx4vCksG0oQpNm5KUlP+gOBs3GUhk1GV1GEaTE+nsHLQPPgYROD0iDpeCAAtBpaUnRMYM5ms5nrPrnHhCLGnkTeIhRsC9GCksoATYpv8pnnsG4PF4i1KE3J+FhlGlNsIZnMlYtU5XEqZa19QVOm0izm38fbnsSy2kwXpPqoQ-TvluK+YsEGRJ9PtRVjlZzy+Q12-GVwhpOqAaZtbJ+NkJMJ98ZDwde9YAOsL5ZyNE0zVvZdSwfPZD2EF9z3feQv1TRDxDmOCTA9ERDjDIA */
  createMachine({
    id: "note",
    initial: "idle",
    context: {
      notes: [],
    },
    states: {
      idle: {
        on: {
          ADD: "adding",
        },
      },
      adding: {
        on: {
          SAVE: "saving",
        },
      },

      saving: {
        on: {
          SAVE_NOTE: {
            actions: assign({
              notes: (context, event) => [...context.notes, event.notes],
            }),
          },
          DELETE: "deleting",
          UPDATE: "updating",
        },
      },

      deleting: {
        on: {
          DELETE_NOTE: {
            target: "saving",
            actions: assign({
              notes: (context, event) => event.notes,
            }),
          },
        },
      },

      updating: {
        on: {
          UPDATE_NOTE: {
            target: "saving",
            actions: assign({
              notes: (context, event) => event.notes,
            }),
          },
        },
      },
    },
  });

export default noteModel;
