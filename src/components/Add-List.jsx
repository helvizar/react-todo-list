import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/operations';

const Form = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim() !== '') { // validate to do list add
      const date = new Date();
      const time = date.getTime();
      const todoObj = {
        id: time,
        todo: todoValue,
        completed: false,
      };
      console.log(todoObj);
      setTodoValue('');
      dispatch(addTodo(todoObj));
    }
  };

  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
      <label>Add your todo-items</label>
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
    </form>
  );
};

export { Form };
