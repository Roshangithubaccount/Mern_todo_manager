import { useEffect, useState } from "react";
import "./styles/App.css";
import { ToastContainer } from "react-toastify";
// import API from "./api/todoApi";
import { getTodos } from "./api/todoApi";

// Components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";

function App() {
  // Input Field
  const [task, setTask] = useState("");

  // Todo List (Load from Local Storage)
  const [todos, setTodos] = useState([]);

  // Edit Todo
  const [editIndex, setEditIndex] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  // Filter
  const [filter, setFilter] = useState("All");
  // Sort
  const [sortBy, setSortBy] = useState("latest");

  // Priority
  const [priority, setPriority] = useState("Medium");

  // Due Date
  const [dueDate, setDueDate] = useState("");

  // File
  const [file, setFile] = useState(null);
  // Save Todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Save Theme
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Save Todos to Local Storage
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();

      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Dashboard todos={todos} />

      <div className="top-controls">
        <SearchBar search={search} setSearch={setSearch} />

        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <FilterBar filter={filter} setFilter={setFilter} />

      <TodoForm
        task={task}
        setTask={setTask}
        todos={todos}
        // setTodos={setTodos}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
        file={file}
        setFile={setFile}
        fetchTodos={fetchTodos}
      />

      <TodoList
        todos={todos}
        // setTodos={setTodos}
        search={search}
        filter={filter}
        sortBy={sortBy}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        setTask={setTask}
        fetchTodos={fetchTodos}
      />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
