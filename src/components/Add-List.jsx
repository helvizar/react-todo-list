import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/reducers/operations';

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [todoValue, setTodoValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check for minimum length
    if (todoValue.length < 3) {
      setError('Todo should be at least 3 characters long');
      return;
    }

    // check if the todo already exists
    if (todos.some((todo) => todo.todo.toLowerCase() === todoValue.toLowerCase())) {
      setError('Todo already exists');
      return;
    }

    // validate characters using regex
    const validCharsRegex = /^[a-zA-Z0-9\s]+$/;
    if (!validCharsRegex.test(todoValue)) {
      setError('Invalid characters in todo');
      return;
    }

    const date = new Date();
    const time = date.getTime();
    const todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    console.log(todoObj);
    setTodoValue('');
    setError(null);
    dispatch(addTodo(todoObj));
  };

  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
      <label>Add your todo items</label>
      <div className="input-and-btn">
        <input
          type="text"
          className="form-control"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary btn-md">
          ADD
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export { Form };
