import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: false },
    { id: 3, todo: 'Watering Plants', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.todo = updatedTodo;
      }
    },
    removeTodo: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((todo) => todo.id !== idToRemove);
    },
    deleteAll: (state) => {
      state.length = 0;
    },
  },
});

export const { addTodo, editTodo, removeTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
