import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav, Image, Row, Col } from 'react-bootstrap'

const MenuSignIn = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Auth e Firestore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to='pageone' className="text-secondary text-decoration-none">PageOne</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/' className="text-secondary text-decoration-none">Pricing</NavLink></Nav.Link>
            <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink to='/addtypes' className="text-secondary text-decoration-none">Tipos</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><NavLink to='/' className="text-secondary text-decoration-none">Another action</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><NavLink to='/' className="text-secondary text-decoration-none">Something</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><NavLink to='/' className="text-secondary text-decoration-none">Separated link</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Row>
              <Col>
                <Image src={firebase.auth().currentUser.photoURL} alt="RF" roundedCircle width="40px" height="40px" className="justify-content-center" />
                <span className='text-white mt-2 ml-3 mr-3'>{firebase.auth().currentUser.displayName}</span>
              </Col>
            </Row>
            <Nav.Link onClick={() => firebase.auth().signOut()}>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MenuSignIn