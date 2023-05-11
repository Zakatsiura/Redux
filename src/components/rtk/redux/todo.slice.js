import {nanoid, createSlice, configureStore, createAction} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false
                }
            })
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id ===id);
            todo.completed = !todo.completed;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetToDefault, () => {
            return [];
        })
    }
})

export const resetToDefault = createAction('root/reset-app');
export  const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export const store = configureStore({
    reducer: todoSlice.reducer,
})