import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { CgWindows, CgBrowser } from "react-icons/cg";
import Link from "next/link";

export default function GameCard({ data, loading }) {
  if (loading) {
    return (
      <Card bg="dark" boader="light">
        <Placeholder bg="light" as={Card.Img} animation="glow" size="lg" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder bg="light" xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder bg="light" xs={9} /> <Placeholder bg="light" xs={9} />{" "}
            <Placeholder bg="light" xs={9} />
          </Placeholder>
          <Placeholder as={Card.Footer} xs={6} />
        </Card.Body>
      </Card>
    );
  }
  return (
    <Link href={`/explore/${data["id"]}`}>
      <Card
        text="white"
        bg="dark"
        boader="light"
        className="click shadow border-0"
        style={{ cursor: "pointer" }}
      >
        <Card.Img src={data["thumbnail"]} />
        <Card.Header className="fs-5 text-truncate">
          {data["title"]}
        </Card.Header>
        <Card.Body>
          <Card.Text className="fw-lighter fs-6 text-truncate text-light">
            {data["publisher"]} | {data["developer"]}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="fw-light fs-8 text-white">
          <div className="d-flex justify-content-between">
            {data["release_date"]}
          </div>
        </Card.Footer>
        <Card.Footer className="fw-light fs-8 text-white">
          <div className="d-flex justify-content-between">
            <span className="badge badge-secondary bg-secondary">
              {data["genre"]}
            </span>
            {data["platform"] === "PC (Windows)" ? (
              <CgWindows size={20} />
            ) : (
              <CgBrowser size={20} />
            )}
          </div>
        </Card.Footer>
      </Card>
    </Link>
  );
}
