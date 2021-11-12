import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { TiTick } from "react-icons/ti";

const FilterItem = ({ condition, value, addFilter }) => {
  const [active, setActive] = useState(false);

  function click_event(condition, method) {
    addFilter(method, condition, value);
    setActive(!active);
  }

  // return highlighted list item
  if (active) {
    return (
      <ListGroup.Item
        active
        action
        variant="secondary"
        onClick={() => click_event(condition, "remove")}
      >
        <div className="row">
          <div className="col-10">{value}</div>
          <div className="col-2">
            <TiTick />
          </div>
        </div>
      </ListGroup.Item>
    );
  }

  return (
    <ListGroup.Item
      action
      className="bg-dark text-grey border-0"
      onClick={() => click_event(condition, "add")}
    >
      {value}
    </ListGroup.Item>
  );
};

export default FilterItem;
