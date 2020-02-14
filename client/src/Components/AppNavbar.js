import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavbar = (props) => {
  var user = {
    name: "Emeric"
  }
  var isAuthenticated = false;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <Fragment>
      <NavItem>
        <NavLink href="/recette">Nouvelle recette</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Déconnexion</NavLink>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink href="/SignUp">S'enregistrer</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/SignIn">Connexion</NavLink>
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand href="/">
            <img top height="70px" src="img/logo.png" alt="CookWithMe" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='navbar-text mr-3'>
              {isAuthenticated ?  `Welcome ${user.name}` : ''}
            </Nav>
            <Nav className='ml-auto' navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
