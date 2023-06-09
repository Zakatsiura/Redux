// import { createStore } from "redux";
//
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT": {
//             return state + 1;
//         }
//         case "DECREMENT": {
//             return state - 1;
//         }
//         case "RESET": {
//             return 0;
//         }
//         default: {
//             return state;
//         }
//     }
// };
//
// export const store = createStore(counter);
//
// // actions
// export const increment = { type: "INCREMENT" };
// export const decrement = { type: "DECREMENT" };
// export const reset = { type: "RESET" };


// FOR TWO SEPARATED COUNTERS:
//
import { createStore } from "redux";

const initialState = {
    count1: 0,
    count2: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_1":
            return { ...state, count1: state.count1 + 1 };
        case "DECREMENT_1":
            return { ...state, count1: state.count1 - 1 };
        case "RESET_1":
            return { ...state, count1: 0 };
        case "INCREMENT_2":
            return { ...state, count2: state.count2 + 1 };
        case "DECREMENT_2":
            return { ...state, count2: state.count2 - 1 };
        case "RESET_2":
            return { ...state, count2: 0 };
        default:
            return state;
    }
};

const store = createStore(counter);
export const increment1 = () => ({
    type: "INCREMENT_1",
});

export const decrement1 = () => ({
    type: "DECREMENT_1",
});

export const reset1 = () => ({
    type: "RESET_1",
});

export const increment2 = () => ({
    type: "INCREMENT_2",
});

export const decrement2 = () => ({
    type: "DECREMENT_2",
});

export const reset2 = () => ({
    type: "RESET_2",
});

export { store };
