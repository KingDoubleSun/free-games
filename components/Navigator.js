import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigator = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigator;
