import ListGroup from "react-bootstrap/ListGroup";
import FilterItem from "./FilterItem";
import { RiArrowDropDownLine } from "react-icons/ri";
const Filter = ({ addFilter }) => {
  const platforms = ["PC", "Browser"];
  const genres = [
    "MMO",
    "MMORPG",
    "Shooter",
    "Strategy",
    "Moba",
    "Battle-Royale",
    "Card",
    "Racing",
    "Sports",
    "Social",
    "Fighting",
  ];

  return (
    <div>
      <ListGroup.Item className="fw-bold fs-3 bg-dark text-white border-0 mt-2">
        Filter
      </ListGroup.Item>
      {/* <h4 className="fw-bold text-white ml-5 mt-2"></h4> */}
      <ListGroup className="mt-5">
        <ListGroup.Item className="fw-bold fs-5 bg-dark text-grey border-0">
          Platform <RiArrowDropDownLine size={40} />
        </ListGroup.Item>
        {platforms.map((item) => (
          <FilterItem
            key={item}
            condition={"platform"}
            value={item}
            addFilter={addFilter}
          />
        ))}
      </ListGroup>
      <ListGroup className="mt-5">
        <ListGroup.Item className="fw-bold fs-5 bg-dark text-grey border-0">
          Categories
        </ListGroup.Item>
        {genres.map((item) => (
          <FilterItem
            key={item}
            condition={"category"}
            value={item}
            addFilter={addFilter}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Filter;
