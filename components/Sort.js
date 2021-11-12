import Form from "react-bootstrap/Form";

function Sort({ changeCondition }) {
  return (
    <div className="col-2 mt-3 text-white sort-font">
      Sort By:
      <Form.Select
        onChange={(element) => changeCondition(element.target.value)}
        className=" bg-dark text-white mt-1"
      >
        <option value="relevance">relevance</option>
        <option value="release-date">release date</option>
        <option value="popularity">popularity</option>
        <option value="alphabetical">alphabetical</option>
      </Form.Select>
    </div>
  );
}

export default Sort;
