import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'; // Make sure your CSS is imported

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-blue">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">SoilNutritionMonitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link href="/blog" className="navbar-link">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/our-team" className="navbar-link">Our Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
