import ListGroup from "react-bootstrap/ListGroup";
import FilterItem from "./FilterItem";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FilterList = ({ name, items, hide, display, addFilter, reset }) => {
  return (
    <ListGroup className="my-4 border-top border-secondary rounded-0">
      <ListGroup.Item
        action
        onClick={() => {
          hide(name);
        }}
        className="fw-bold fs-5 bg-dark text-grey text-capitalize border-0 d-flex justify-content-between"
      >
        <div>{name}</div>
        <div>
          {display ? (
            <RiArrowDropDownLine size={40} />
          ) : (
            <RiArrowDropUpLine size={40} />
          )}
        </div>
      </ListGroup.Item>
      {items.map((item) => (
        <FilterItem
          key={item}
          condition={name === "platform" ? "platform" : "category"}
          value={item}
          addFilter={addFilter}
          display={display}
          reset={reset}
        />
      ))}
    </ListGroup>
  );
};

export default FilterList;
