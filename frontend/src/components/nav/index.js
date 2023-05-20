import React, { useState } from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavbarLink,} from 'mdb-react-ui-kit';

function Nav() {
  return (
    <MDBNavbar className="navTop" fixed='top' expand='lg'dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Milad Tehrani</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarLink href='#about-me'>About Me</MDBNavbarLink>
            <MDBNavbarLink href='#projects-section'>Projects</MDBNavbarLink>
            <MDBNavbarLink aria-current='page' href='/'>Resume</MDBNavbarLink>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;