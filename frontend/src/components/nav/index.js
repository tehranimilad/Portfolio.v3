import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Nav() {
  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Milad Tehrani</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='#'>Projects</MDBNavbarLink>
            <MDBNavbarLink href='#'>About Me</MDBNavbarLink>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;