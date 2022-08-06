import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Activity1">Activity1</Nav.Link>
            <Nav.Link href="/Activity2">Activity2</Nav.Link>
            <Nav.Link href="/Activity3">Activity3</Nav.Link>
            <Nav.Link href="/Activity4">Activity4</Nav.Link>
            <Nav.Link href="/Activity5">Activity5</Nav.Link>
            <Nav.Link href="/Activity6">Activity6</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
    
      <Outlet />
    </>
  )
};

export default Layout;

