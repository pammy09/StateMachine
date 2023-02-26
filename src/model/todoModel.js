import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const todoModel =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCWEA2YAxAIIAipA2gAwC6ioADqrNstqgHb0gAeiAjACYArJgDsADjHCqAZkH8qEwbIkAWADQgAnollzMEqoICcVNfzVTTEgL62taDJgCGECNg5RCAZWIA1AFFqOiQQJhY2Tm4+BHlRUwA2KQtjRLVjWS1dOIMjU3NLaxM7BxAnLFgXADdPbz8ggH0AOQB5ABVg2m4I1nYuMNi1QUFMDMTBMSpE80E1NVlE7MQFKkwR2WlJtUT+MTUTMXtHdEqausJSQIAZQM6QnuY+6MHEYSlDfmF05WFvsX4JmWcTmmGEJghEi+xkmi2O5VOmCqtS8hAAqgAFUjEe7dMK9KIDUCxd5iT7fKwif6A4F7MlGCayfj6TYqJTwiqYCBgAhsVFXW6dFodLqhRhPQkxN5mcRyPaCCQSQ5iAHAkYSdZQlRSdLpYRiRIcxEAVwYEBcfO8mOxQrauLF4Ql-SlCFJ5J+VMSAKBOkQULGKUV3xmJmEk3sZQ46Dg3Aqj0izteCAAtEtfSnEpgqNmc7mc5Yjc5cAR488ibxEMNgfo1OsTLJhLITArdkpDWVOW4PF5S5KkyN+JhZAt9vrDjtjNXzHWG02W4oJO2Ts5kXVe4niZX5kOqF9F98c2IfTkmYPhMMDueJKpjKVl1huby1-inS9NwhpBq-iYMiZEiV9H4fhq0BMElCSaYm0kJcEWcU1zUtdc3wrD93jBcFf3-a9d2A9N5XESxz3eRJzwVfgI1sIA */
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
          SAVE: "saving",
        },
      },

      saving: {
        on: {
          SAVE_NOTE: {
            actions: assign({
              todos: (context, event) => [...context.todos, event.todos],
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
              todos: (context, event) => event.todos,
            }),
          },
        },
      },

      updating: {
        on: {
          UPDATE_NOTE: {
            target: "saving",
            actions: assign({
              todos: (context, event) => event.todos,
            }),
          },
        },
      },
    },
  });

export default todoModel;
