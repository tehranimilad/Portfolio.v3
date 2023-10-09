import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);


  return (
    <MDBNavbar fixed='top' expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>Milad Tehrani</MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNav(!showNav)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar show={showNav}>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#about-me'>
              About Me
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#projects-section'>Projects</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#connect-with-me'>Connect With Me</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  );
}