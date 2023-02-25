import { assign, createMachine } from "xstate";

const EmployeeMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5RgLYAcA2B7AnmMAdAJYQZgDEAggCLUD6AogLIAKAMgPICaDDA2gAYAuolBossIgBciWAHaiQAD0QBaAGwBmApoAsAgXt0AOE1oBMxgDQgciXdsO6AnM-WHzAdgCMJ3boBfIJs5LAg4RVRMXHxFcUkZeUUVBFVzTQECAFZzAz1PZzzC9Rs7VP8CfyyDT01zXXNvY08s4PB0bDxCEjI4iWlZBSRlNSbzbNynAqKBEtt7bSzvVzd1B1m12baozvwCWABDADcwBg6YsD6EweTEbyaCAtc1wt1PYyW5socJg3vCppZLJvIJBIA */
  createMachine({
    id: "employee",
    initial: "idle",
    context: {
      employee: [],
    },
    states: {
      idle: {
        on: {
          ADD_EMPLOYEE: {
            target: "saveEmployee",
          },
        },
      },
      saveEmployee: {
        actions: assign({
          employee: (context, event) => {
            return [...context.employee, event.employee];
          },
        }),
      },
    },
  });
export default EmployeeMachine;