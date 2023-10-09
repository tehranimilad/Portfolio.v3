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
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="collapse navbar-collapse" id="navbarNav"></div>
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand>Milad Tehrani</MDBNavbarBrand>
    //       <MDBNavbarNav>
    //         <MDBNavbarLink href='#about-me'>About Me</MDBNavbarLink>
    //         <MDBNavbarLink href='#projects-section'>Projects</MDBNavbarLink>
    //         <MDBNavbarLink href='#connect-with-me'>Connect With Me</MDBNavbarLink>
    //         <MDBNavbarLink aria-current='page' href='https://docs.google.com/document/d/1TKMFQ6sR580VwZ-Xmw47L4l11jQ1oLBa0Fa7631GEz8/edit?usp=sharing' target="blank">Resume</MDBNavbarLink>
    //       </MDBNavbarNav>
    //   </MDBContainer>
    // </nav>
    <MDBNavbar expand='lg' light bgColor='light'>
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
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  );
}