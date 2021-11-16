import ListGroup from "react-bootstrap/ListGroup";
import FilterList from "./FilterList";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";

function toggle(value) {
  return Math.abs(value - 1);
}
const FLITER_LISTS = {
  platform: ["PC", "Browser"],
  category: [
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
  ],
  graphics: ["2D", "3D"],
  combat: ["PVE", "PVP"],
  setting: ["Anime", "Fantasy", "Sci-Fi", "Military", "Horror"],
  tags: [
    "MMOFPS",
    "Sandbox",
    "Open-World",
    "Survival",
    "Action-RPG",
    "MMORTS",
    "Pixel",
    "Voxel",
    "MMOTPS",
    "Zombie",
    "First-Person",
    "Top-Down",
    "Tank",
    "Space",
    "Sailing",
    "Side-Scroller",
    "Superhero",
    "Permadeath",
    "Action",
    "Martial-Arts",
    "Flight",
    "Low-Spec",
  ],
};

// records if display the corresponding filter list
const Filter = ({ addFilter }) => {
  const [display, setDisplay] = useState({
    platform: 1,
    category: 1,
    graphics: 1,
    combat: 1,
    setting: 1,
    tags: 1,
  });

  const [reset, setReset] = useState(0);
  function hideList(type) {
    setDisplay((old) => ({ ...old, [type]: toggle(old[type]) }));
  }

  return (
    <div className="overflow-auto">
      <ListGroup.Item className="fw-bold fs-3 bg-dark text-white border-0 mt-2">
        <div className="row">
          <div className="col-6">
            Filter <BsFilter size={40} />
          </div>
          <div className="col-6">
            <button
              className="fw-bold fs-5 btn btn-sm btn-secondary overflow-hidden"
              onClick={() => {
                setReset(reset + 1);
                addFilter("reset");
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </ListGroup.Item>

      {Object.keys(FLITER_LISTS).map((key) => {
        return (
          <FilterList
            key={key}
            name={key}
            items={FLITER_LISTS[key]}
            hide={hideList}
            display={display[key]}
            addFilter={addFilter}
            reset={reset}
          />
        );
      })}
    </div>
  );
};

export default Filter;
