import { assign, createMachine } from "xstate";

const CounterMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGMA2BLZBrAdAOwHsAXACwIDcwAnSAYgGEAZASXoGkBtABgF1FQADgVjoi6Ann4gAHogC0AZgBMOJQq5cArADYA7NqXaAnJoUBGADQgAnojNcjOLmYAsRlwA5NS3c49KlAF9AqzRMXAAjAFciIgl6DGxaAGUAVXp6AFFk5O4+JBAhETEJKVkEJVcnTTcXbQ8jd1cubStbBHsVTUb3fxddHwVdXWDQxMiYuLwE8NoACQB5ADVMgCVMgBE8qSLRcUkC8sqXatr6xpdm1ps7AxwFBTdNLn03XQUjEdGQQgg4KTC2B2wj2pUO8kquhwOg0mi8RiGmjadhOCm67gGXBccKMHhcLm+gNwhFIFGokGBxX2ZXkZmM0O0sPhiORHQcODcFyMZiGCmMug8hPGOGisXi40poIOoHKuk0OGGF1M71MmjprPsjk57m5vP5gpCICJOFgUWQyDg8AKuxK0pkiEeHhwHjxvXeWPqHg1zmdH16fg+ZncQvCODIlBoEEltppCEdztdnnddRdGruHiDJh5cuUmlMwWCQA */
  createMachine({
    context: {
      count: 0,
      employee: [],
    },
    on: {
      INCREMENT: {
        actions: assign({
          count: (context) => context.count + 1,
        }),
      },
      DECREMENT: {
        actions: assign({
          count: (context) => context.count - 1,
        }),
      },

      ADD_EMPLOYEE: {
        actions: assign({
          employee: (context, event) => [...context.employee, event.employee],
        }),
      },
    },
  });

export default CounterMachine;
