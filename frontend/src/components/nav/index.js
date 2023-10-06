import React, { useState } from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavbarLink,} from 'mdb-react-ui-kit';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav"></div>
      <MDBContainer fluid>
        <MDBNavbarBrand>Milad Tehrani</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarLink href='#about-me'>About Me</MDBNavbarLink>
            <MDBNavbarLink href='#projects-section'>Projects</MDBNavbarLink>
            <MDBNavbarLink href='#connect-with-me'>Connect With Me</MDBNavbarLink>
            <MDBNavbarLink aria-current='page' href='https://docs.google.com/document/d/1TKMFQ6sR580VwZ-Xmw47L4l11jQ1oLBa0Fa7631GEz8/edit?usp=sharing' target="blank">Resume</MDBNavbarLink>
          </MDBNavbarNav>
      </MDBContainer>
    </nav>
  );
}

export default Nav;