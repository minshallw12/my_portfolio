import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function MyNav() {
  return (
    <Navbar bg="white" expand="lg" style={{background:'white'}}>
      <Container style={{display:'flex', alignItems:'center', justifyContent:'center', height: '30px'}}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navcenter center" style={{display:'flex', justifyContent:'space-around', width: "900px"}}>
            <Nav.Link ><Link className = 'NavLinks' to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link className = 'NavLinks' to='/aboutme'>About me</Link></Nav.Link>
            <Nav.Link ><Link className = 'NavLinks' to='/projects'>My Projects</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}