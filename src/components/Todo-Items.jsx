import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { editTodo, removeTodo, toggleComplete } from '../redux/reducers/operations';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [editMode, setEditMode] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditMode(todo.id);
    setEditedTodo(todo.todo);
  };

  const handleSaveEdit = (todoId) => {
    dispatch(editTodo({ id: todoId, updatedTodo: editedTodo }));
    setEditMode(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
          <div className='content'>
            {editMode === todo.id ? (
              <>
                <input
                  type='text'
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => dispatch(toggleComplete(todo.id))} // Menghubungkan checkbox dengan toggleComplete
                />
                <p
                  style={
                    todo.completed === true
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: 'none' }
                  }
                >
                  {todo.todo}
                </p>
              </>
            )}
          </div>
          <div className='actions-box'>
            <span>
              <Icon icon={edit2} onClick={() => handleEditClick(todo)} />
            </span>
            <span>
              <Icon
                icon={trash}
                onClick={() => dispatch(removeTodo(todo.id))
              }
            />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Todos };
