import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, todo: 'Beli Jamur', completed: true },
    { id: 2, todo: 'Main Catur ', completed: false },
    { id: 3, todo: 'Liburan Musim Panas', completed: false },
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
    toggleComplete: (state, action) => {
      const id = action.payload;
      const todoToToggle = state.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
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

export const { addTodo, editTodo, toggleComplete, removeTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
