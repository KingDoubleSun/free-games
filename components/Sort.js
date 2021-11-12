import Form from "react-bootstrap/Form";

function Sort({ changeCondition }) {
  return (
    <Form.Select
      onChange={(element) => changeCondition(element.target.value)}
      className=" bg-dark text-white"
    >
      <option value="relevance">relevance</option>
      <option value="release-date">release date</option>
      <option value="popularity">popularity</option>
      <option value="alphabetical">alphabetical</option>
    </Form.Select>
  );
}

export default Sort;
