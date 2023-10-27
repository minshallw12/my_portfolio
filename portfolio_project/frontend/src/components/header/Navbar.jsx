import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function MyNav() {
  return (
    <div>
      <Navbar className="navbar"bg="white" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto navcenter center" id='navbar-children'>
              <Nav.Link ><Link className = 'NavLinks' to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link className = 'NavLinks' to='/aboutme'>About me</Link></Nav.Link>
              <Nav.Link ><Link className = 'NavLinks' to='/projects'>My Projects</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}