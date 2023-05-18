import React, { useState } from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavbarLink,} from 'mdb-react-ui-kit';

function Nav() {
  return (
    <MDBNavbar className="navTop" fixed='top' expand='lg'dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Milad Tehrani</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarLink aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/projects'>Projects</MDBNavbarLink>
            <MDBNavbarLink href='/aboutme'>About Me</MDBNavbarLink>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;