import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const MenuSignOut = () => {
  return (
    <div className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Auth e Firestore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MenuSignOut