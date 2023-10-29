/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/reducers/operations';
import { Container, Row, Col, Form, Button, Alert, InputGroup } from 'react-bootstrap';

const AddList = () => {
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

    // check if the todo already exists (case-insensitive)
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

    // check the number of active todos
    const activeTodosCount = todos.filter((todo) => !todo.completed).length;
    if (activeTodosCount >= 10) {
      setError('You have reached the maximum limit of active todos. Complete some before adding more.');
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
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Label className="me-3">What's the plan for today?</Form.Label>
              <InputGroup className='d-flex align-items-center'>
                <Form.Control
                  className="p-3"
                  type="text"
                  required
                  value={todoValue}
                  onChange={(e) => setTodoValue(e.target.value)}
                  placeholder='Add your todo items'
                />
                <Button className="p-3" type="submit" variant="secondary" size="md">
                  ADD
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export { AddList };
