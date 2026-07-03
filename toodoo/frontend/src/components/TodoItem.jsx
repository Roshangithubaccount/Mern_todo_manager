import React from "react";
import "../styles/TodoItem.css";
import { toast } from "react-toastify";
import { updateTodo, deleteTodo } from "../api/todoApi";

const TodoItem = ({
  number,
  todo,
  setTask,
  setEditIndex,
  todos,
  fetchTodos,
}) => {
  // Complete / Undo
  const toggleComplete = async () => {
    try {
      await updateTodo(todo._id, {
        completed: !todo.completed,
      });

      toast.success(
        todo.completed ? "Todo marked as Pending" : "Todo Completed",
      );

      fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update todo");
    }
  };

  // Delete
  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);

      toast.success("Todo Deleted Successfully");
      await fetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete todo");
    }
  };

  // Edit
  const editTodo = () => {
    const index = todos.findIndex((item) => item._id === todo._id);

    const editTodo = () => {
      const index = todos.findIndex((item) => item._id === todo._id);

      setTask(todo.title);
      setEditIndex(index);
    };
    setEditIndex(index);
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <h2 className={todo.completed ? "completed-text" : ""}>
          {number}. {todo.title}
        </h2>

        <div className="todo-meta">
          <span
            className={`priority-badge ${(todo.priority || "Medium").toLowerCase()}`}
          >
            {todo.priority || "Medium"}
          </span>

          <span>
            📅{" "}
            {todo.dueDate
              ? new Date(todo.dueDate).toLocaleDateString()
              : "No Due Date"}
          </span>
        </div>

        <p>🕒 Created : {new Date(todo.createdAt).toLocaleString()}</p>

        {todo.file && (
          <div className="file-preview">
            <p>📎 {todo.file.name || "Attachment"}</p>
          </div>
        )}
      </div>

      <div className="todo-buttons">
        <button className="done-btn" onClick={toggleComplete}>
          {todo.completed ? "Undo" : "Done"}
        </button>

        <button className="edit-btn" onClick={editTodo}>
          Edit
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
