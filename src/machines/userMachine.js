import { assign, createMachine } from "xstate";

const userMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgEkA5AYQCUBRAWTooBUBtABgF1FQAHAPaxcAF1wD8vEAA9EAJjkA6ORwCcAZgDsAFjkBWbaoAcANhO6ANCACe8jtsUmte-QEYOL4-YC+3q2iw8QlIAETpaRmZ2bilBYTEJKVkEV1VFI3U5I3d7TXV1PSNtK1sUjiNFdVcjTRN9F3NVDjlffwwcAmISKgAJAEEKAHFmPqZOHiQQONFxSUnk1zkSxEXfPxB8AQg4KQCO4NihGcT5xCr0rW0M1RMbkz0H5YR1D0VVPTqa+81VbU1XNbeIA */
  createMachine({
    context: {
      users: [

      ],
    },
    on: {
        REGISTER: {
            actions: assign({
                users: (context, event) => [...context.users, event.users],
              }),
            
        },
        NEXT: {
            target: 'save',
        }
    },
    save: {
        on: {
            actions: 
        },
    }
  });

export default userMachine;
