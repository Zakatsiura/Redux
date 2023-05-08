// VANILLA JS:


// import { createStore } from "redux";
//
// const counter = (state = 0, action) => {
//     if (action.type === "INCREMENT") {
//         return state + 1;
//     }
//     if (action.type === "DECREMENT") {
//         return state - 1;
//     }
//     if (action.type === "RESET") {
//         return 0;
//     }
//     return state;
// };
// const store = createStore(counter);
//
// const increment = {
//     type: "INCREMENT"
// };
//
// const decrement = {
//     type: "DECREMENT"
// };
//
// const reset = {
//     type: "RESET"
// };
//
// const count = document.createElement("div");
// count.innerText = store.getState();
// count.id = "count";
// document.body.append(count);
//
// const decBtn = document.createElement("button");
// decBtn.innerText = "-";
// decBtn.onclick = () => store.dispatch(decrement);
// document.body.append(decBtn);
//
// const incBtn = document.createElement("button");
// incBtn.innerText = "+";
// incBtn.onclick = () => store.dispatch(increment);
// document.body.append(incBtn);
//
// const resBtn = document.createElement("button");
// resBtn.innerText = "res";
// resBtn.onclick = () => store.dispatch(reset);
// document.body.append(resBtn);
//
// const render = () => {
//     document.getElementById("count").innerText = store.getState();
// };
// store.subscribe(render);


// ACTION CREATORS:


// import { createStore } from "redux";
//
// let nextTodoId = 0;
//
// const todos = (state = [], action) => {
//     switch (action.type) {
//         case "ADD_TODO": {
//             return [
//                 ...state,
//                 {
//                     id: ++nextTodoId,
//                     title: action.title,
//                     completed: false
//                 }
//             ];
//         }
//         case "TOGGLE_TODO": {
//             return state.map((todo) =>
//                 todo.id === action.todoId
//                     ? {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                     : todo
//             );
//         }
//         default: {
//             return state;
//         }
//     }
// };

// persist
// const defaultValues = [
//     { id: 0, title: "hello", completed: false },
//     { id: 1, title: "hello 2", completed: false }
// ];
// const initialValue = {
//   todos: defaultValues,
//   user: {},
// }

// const store = createStore(todos, defaultValues);

// action creators
// const addTodo = (title) => ({
//     type: "ADD_TODO",
//     title
// });
// const toggleTodo = (todoId) => ({
//     type: "TOGGLE_TODO",
//     todoId
// });
//
// console.log(store.getState());

// store.dispatch(addTodo("Learn React"));
// console.log(store.getState());
// store.dispatch(addTodo("Learn Redux"));
// console.log(store.getState());

// store.dispatch(toggleTodo(1));
// console.log(store.getState());
