import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Navigator = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="navbar-expand-lg">
      <div className="container border-bottom border-secondary">
        <Link href="/">
          <a className="navbar-brand">Free Games</a>
        </Link>
        <Nav className="me-auto">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigator;
