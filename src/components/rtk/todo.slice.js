import {createStore} from "redux";
import {nanoid, createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTogo: {
            reducer: (state, action) => {},
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false
                }
            })
        },
        removeTodo: (state, action) => {},
        toggleTodo: (state, action) => {},
    },
    // extraReducers: (builder) => {
    //     builder.addCase()
    // }
})

export  const {addTogo, removeTodo, toggleTodo} = todoSlice.actions;
export const store = createStore(todoSlice.reducer)