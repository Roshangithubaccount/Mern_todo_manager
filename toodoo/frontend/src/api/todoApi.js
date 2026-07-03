import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/todos",
});

export const getTodos = () => API.get("/");

export const createTodo = (todo) => API.post("/", todo);

export const updateTodo = (id, todo) => API.put(`/${id}`, todo);

export const deleteTodo = (id) => API.delete(`/${id}`);