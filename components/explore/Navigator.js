import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigator = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <div className="container border-bottom border-secondary">
        <Navbar.Brand href="/">Free Games</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="insights">Insights</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigator;
