import Pagination from "react-bootstrap/Pagination";

export default function PageSystem({
  current_page,
  games_per_page,
  data_length,
  paginate,
}) {
  // don't return pagination bar if there is no games to diplay
  if (data_length === 0) return <></>;

  let items = [];
  let last_page = Math.ceil(data_length / games_per_page);
  for (let number = 1; number <= last_page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === current_page}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination bsPrefix="pagination bg-dark">
      <Pagination.First onClick={() => paginate(1)} />
      <Pagination.Prev
        onClick={() => paginate(Math.max(current_page - 1, 1))}
      />
      {items}
      <Pagination.Next
        onClick={() => paginate(Math.min(current_page + 1, last_page))}
      />
      <Pagination.Last onClick={() => paginate(last_page)} />
    </Pagination>
  );
}
