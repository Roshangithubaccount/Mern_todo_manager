import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Todo Backend API Running 🚀",
  });
});

export default app;