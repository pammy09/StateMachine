import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { actions, assign, createMachine, Machine } from "xstate";

const todoModel =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCWEA2YAxAIIAipA2gAwC6ioADqrNstqgHb0gAeiAtAA4ALJgBMARgDMYgJwB2KmIBsyiQFYxwgDQgAnogmCqmeeuWKxU2WPny5AXwe60GTAEMIEbByiEAysQAagCi1HRIIEwsbJzcfAjS6pjCghL2IoKC6oJSEroGifaYFupU0nYy5hpOLuhYsO4Abj5+gaEA+iEAsgAKADIA8gCaIWG03NGs7FyRCVZimOaq2VnCVFJpYgWI8rKYElS5yrLCttlG6rUgrg3NrYSkIf0hACrjEYzM03FziMISZSYQRqZTZWSyNJSeT5fSGeRSJZHKTKdQSQ4wqhUZTXW6YRotXyEACqvVIxHe4Um31is1ACQBQJBgPBkIqsMKVlEwlkZQ0ZzEtiodlx9UwEDABDYRKeL3eXT6Q1GH2pMRm8UQykkKVkqj2eS16jMOwQe0wp3SSnkakuklFbgArgwIO5pX5SeT5T0BiMxlTIlNaRqEIzgaDWVCYSaxCJzeo+fZhFJ4-InM4QBx0HBuLdVT86bwBGI0ZhrDJIVINqioSahKWYcoDYdZICpDJ7VhcAQ80G-gh+GINqXZOXclWctITUYJOIAYoqMJ1DZBHsOx4vK0e+q++jS+UYYJB6c9iOp2lZyytPHAQi1wTNwGadv6YgVMkJFpAbYFAD1Do4YkxgpMiNpXmkGxrhKUoPl8aq-C+CCqIsdiqNYf5YtiZ4zp+JzCIuewSHha5Oi6bpbvBhaIVqpjWo2vLrFiyjRtYpgGoehGDlcaZAA */
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
          SAVE_EMPLOYEE: {
            actions: assign({
              todos: (context, event) => [...context.todos, event.todos],
            }),
          },
          DELETE: "deleting",
          UPDATE: "updating",
        },
      },

      deleting: {
        type: "final",
        on: {
          DELETE_EMPLOYEE: {
            actions: assign({
              todos: (context, event) => event.todos,
            }),
          },
        },
      },

      updating: {
        on: {
          UPDATE_EMPLOYEE: {
            target: "idle",
            actions: assign({
              todos: (context, event) => event.todos,
            }),
          },
        },
      },
    },
  });

export default todoModel;
