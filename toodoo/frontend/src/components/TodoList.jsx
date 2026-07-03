import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  setTodos,
  search,
  filter,
  setTask,
  setEditIndex,
  fetchTodos,
}) {
  // Search Filter
  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All"
        ? true
        : filter === "Completed"
          ? todo.completed
          : filter === "Pending"
            ? !todo.completed
            : todo.priority === filter;

    return matchSearch && matchFilter;
  });

  // Delete Todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Edit Todo
  const editTodo = (index) => {
    setTask(todos[index].title);
    setEditIndex(index);
  };

  // Complete Todo
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <div className="empty">
          <h2>No Todos Found 📭</h2>
          <p>Add your first task.</p>
        </div>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo._id}
            number={index + 1}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setTask={setTask}
            setEditIndex={setEditIndex}
            fetchTodos={fetchTodos}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
