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
            <NavLink to='pageone' className="text-white text-decoration-none mt-2 ml-3 mr-3">PageOne</NavLink>
            <NavLink to='/' className="text-white text-decoration-none mt-2 ml-3 mr-3">Pricing</NavLink>
            <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink to='/addtypes' className="text-secondary text-decoration-none">Tipos</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to='/addexpenses' className="text-secondary text-decoration-none">Despesa</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><NavLink to='/' className="text-secondary text-decoration-none">Something</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><NavLink to='/' className="text-secondary text-decoration-none">Separated link</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Consultar" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink to='/listtypes' className="text-secondary text-decoration-none">Tipos</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to='/listexpenses' className="text-secondary text-decoration-none">Despensas</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3"><NavLink to='/' className="text-secondary text-decoration-none">Something</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.4"><NavLink to='/' className="text-secondary text-decoration-none">Separated link</NavLink></NavDropdown.Item>
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