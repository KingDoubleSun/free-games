import ListGroup from "react-bootstrap/ListGroup";

export default function TwoColumnLists({ list }) {
  // split one list of items to a two-column lists
  if (!list) {
    return null;
  }
  const titles = Object.keys(list);
  const half_index = Math.ceil(titles.length / 2);
  return (
    <>
      {[
        titles.slice(0, half_index),
        titles.slice(half_index, titles.length),
      ].map((sub_titles, i) => {
        return (
          <div className="col-6" key={i}>
            <ListGroup className="border-start border-4 rounded-0 border-secondary">
              {sub_titles.map((title, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    as="li"
                    className="d-flex justify-content-between bg-dark align-items-start text-white border-0"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold text-capitalize text-muted">
                        {title}
                      </div>
                      {list[title]}
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        );
      })}
    </>
  );
}
