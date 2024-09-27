import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
function Navigation() {
  return (
    <>
    <Navbar  fixed="top" data-bs-theme="dark" style={{backgroundColor:"black"}}>
      <Container>
        <Navbar.Brand href="#home-comp" >Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#business-comp">Businesscard</Nav.Link>
          <Nav.Link href="#games-comp">Games</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default Navigation;