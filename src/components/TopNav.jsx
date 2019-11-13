import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

// https://www.underconsideration.com/brandnew/archives/deviantart_logo_detail.png

function TopNav(){
  return (
    <div  className="top-nav" >
      <style jsx>{`
      .deviant-logo {
        max-height: 50px;
        max-width: auto;
      }

      .top-nav {
        background-color: black;
      }
      `}</style>
      <link href='http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' rel='stylesheet' type='text/css'></link>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img className="deviant-logo" src="https://www.underconsideration.com/brandnew/archives/deviantart_logo_detail.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link color="white" href="#browse">Browse</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Groups</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Forum</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="search fa fa-search fa-2x" href="#features"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Join</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
       Sign In
            </Nav.Link>
            <Nav.Link className="fa fa-user fa-2x" href="#user"></Nav.Link>

            <NavDropdown title="Submit" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deviation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Status Update</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Journal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Literature</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Poll</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Motion Book</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Da Muro</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;