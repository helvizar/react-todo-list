import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";

const FilterButtons = ({ activeFilter, handleFilterClick }) => {
  return (
    <ButtonGroup className="my-3">
      <Button
        variant={activeFilter === "ALL" ? "primary" : "secondary"}
        onClick={() => handleFilterClick("ALL")}
        size="md"
      >
        All
      </Button>
      <Button
        variant={activeFilter === "ACTIVE" ? "primary" : "secondary"}
        onClick={() => handleFilterClick("ACTIVE")}
        size="md"
      >
        Active
      </Button>
      <Button
        variant={activeFilter === "COMPLETED" ? "primary" : "secondary"}
        onClick={() => handleFilterClick("COMPLETED")}
        size="md"
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

// validate prop types
FilterButtons.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterButtons;
