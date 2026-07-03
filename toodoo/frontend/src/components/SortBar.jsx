import "../styles/SortBar.css";

const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-bar">

      <label>Sort By</label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="high">High Priority</option>
        <option value="date">Due Date</option>
      </select>

    </div>
  );
};

export default SortBar;