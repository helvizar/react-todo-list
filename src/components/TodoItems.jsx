import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import {
  editTodo,
  removeTodo,
  toggleComplete,
  deleteAll,
} from "../redux/reducers/operations";
import FilterButtons from "./FilterButtons";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editMode, setEditMode] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleEditClick = (todo) => {
    setEditMode(todo.id);
    setEditedTodo(todo.todo);
  };

  const handleSaveEdit = (todoId) => {
    dispatch(editTodo({ id: todoId, updatedTodo: editedTodo }));
    setEditMode(null);
  };

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all todos?");
    if (confirmDelete) {
      dispatch(deleteAll());
    }
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <FilterButtons
            activeFilter={activeFilter}
            handleFilterClick={handleFilterClick}
          />

          {todos
            .filter((todo) => {
              if (activeFilter === "ACTIVE") {
                return !todo.completed;
              } else if (activeFilter === "COMPLETED") {
                return todo.completed;
              }
              return true;
            })
            .map((todo) => (
              <div
                key={todo.id}
                className={`todo-box d-flex align-items-center mb-2 border p-2 ${
                  editMode === todo.id ? "edit-mode" : ""
                }`}
              >
                <div className="content flex-grow-1 p-2">
                  {editMode === todo.id ? (
                    <>
                      <Form.Control
                        className="p-2"
                        type="text"
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                      />
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleSaveEdit(todo.id)}
                        className="mt-2"
                      >
                        Save
                      </Button>
                    </>
                  ) : (
                    <div className="d-flex align-items-center">
                      <Form.Check
                        className="me-3"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleComplete(todo.id))}
                      />
                      <p
                        style={{
                          textDecoration: todo.completed ? "line-through" : "none",
                          margin: 0,
                        }}
                        className="ml-3"
                      >
                        {todo.todo}
                      </p>
                    </div>
                  )}
                </div>
                {editMode !== todo.id && (
                  <div className="actions-box p-2">
                    <span className="mx-3">
                      <Icon
                        icon={edit2}
                        onClick={() => handleEditClick(todo)}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                    <span>
                      <Icon
                        icon={trash}
                        onClick={() => dispatch(removeTodo(todo.id))}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                )}
              </div>
            ))}

          {todos.length > 0 && (
            <Button
              variant="danger"
              size="sm"
              className="mt-2 px-4 p-2"
              onClick={handleDeleteAll}
            >
              DELETE ALL
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export { Todos };
