import React from "react";
import "../styles/TodoForm.css";
import { toast } from "react-toastify";
// import { createTodo } from "../api/todoApi";
// import { toast } from "react-toastify";
import { createTodo, updateTodo } from "../api/todoApi";
const TodoForm = ({
  task,
  setTask,
  todos,
  setTodos,
  editIndex,
  setEditIndex,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  file,
  setFile,
  fetchTodos,
}) => {
  // Add / Update Todo
  async function handleSubmit() {
    if (task.trim() === "") {
      toast.error("Please enter a task!");
      return;
    }

    if (editIndex !== null) {
      try {
        const id = todos[editIndex]._id;

        await updateTodo(id, {
          title: task,
          priority,
          dueDate,
        });

        toast.success("Todo Updated Successfully");

        await fetchTodos();

        setEditIndex(null);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Update Todo");
      }
    } else {
      const newTodo = {
        title: task,
        description: "",
        priority,
        dueDate,
        category: "Personal",
      };

      try {
        await createTodo(newTodo);

        await fetchTodos();

        toast.success("Todo Added Successfully");
      } catch (error) {
        toast.error("Failed to Add Todo");
      }
    }

    // Reset Form
    setTask("");
    setPriority("Medium");
    setDueDate("");
    setFile(null);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="todo-form">
      {/* Task */}

      <input
        type="text"
        className="todo-input"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Priority */}

      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">🔴 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      {/* Due Date */}

      <input
        type="date"
        className="date-input"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {/* File */}

      <input
        type="file"
        className="file-input"
        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.mp4,.mp3,.zip"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="add-btn" onClick={handleSubmit}>
        {editIndex !== null ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};

export default TodoForm;
