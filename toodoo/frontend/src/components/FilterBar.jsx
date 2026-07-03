import React from "react";
import "../styles/FilterBar.css";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-bar">

      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

      <button
        className={filter === "Pending" ? "active" : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>

      <button
        className={filter === "High" ? "active" : ""}
        onClick={() => setFilter("High")}
      >
        High
      </button>

      <button
        className={filter === "Medium" ? "active" : ""}
        onClick={() => setFilter("Medium")}
      >
        Medium
      </button>

      <button
        className={filter === "Low" ? "active" : ""}
        onClick={() => setFilter("Low")}
      >
        Low
      </button>

    </div>
  );
};

export default FilterBar;