import React from "react";
import "../styles/Dashboard.css";

const Dashboard = ({ todos }) => {
  const totalTodos = todos.length;

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const pendingTodos = totalTodos - completedTodos;

  const highPriority = todos.filter(
    (todo) => todo.priority === "High"
  ).length;

  const today = new Date().toISOString().split("T")[0];

  const todayTasks = todos.filter(
    (todo) => todo.dueDate === today
  ).length;

  const progress =
    totalTodos === 0
      ? 0
      : Math.round((completedTodos / totalTodos) * 100);

  const cards = [
    {
      title: "Total",
      value: totalTodos,
      color: "#2563eb",
      icon: "📋",
    },
    {
      title: "Completed",
      value: completedTodos,
      color: "#16a34a",
      icon: "✅",
    },
    {
      title: "Pending",
      value: pendingTodos,
      color: "#f59e0b",
      icon: "⏳",
    },
    {
      title: "High Priority",
      value: highPriority,
      color: "#dc2626",
      icon: "🔥",
    },
    {
      title: "Today's Tasks",
      value: todayTasks,
      color: "#7c3aed",
      icon: "📅",
    },
  ];

  return (
    <>
      <div className="dashboard">
        {cards.map((card) => (
          <div
            key={card.title}
            className="dashboard-card"
            style={{
              borderTop: `5px solid ${card.color}`,
            }}
          >
            <h3>{card.icon}</h3>

            <h2>{card.value}</h2>

            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span>Overall Progress</span>

          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;