import PropTypes from "prop-types";

const FilterButtons = ({ activeFilter, handleFilterClick }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => handleFilterClick("ALL")}
        className={activeFilter === "ALL" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => handleFilterClick("ACTIVE")}
        className={activeFilter === "ACTIVE" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => handleFilterClick("COMPLETED")}
        className={activeFilter === "COMPLETED" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
};

// validate prop types
FilterButtons.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterButtons;
