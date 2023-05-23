import React, { useState } from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavbarLink,} from 'mdb-react-ui-kit';

function Nav() {
  return (
    <MDBNavbar className="navTop" fixed='top' expand='lg'dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Milad Tehrani</MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavbarLink href='#about-me'>About Me</MDBNavbarLink>
            <MDBNavbarLink href='#projects-section'>Projects</MDBNavbarLink>
            <MDBNavbarLink aria-current='page' href='https://docs.google.com/document/d/1MzWaSuGeCjDPhTjd3XrxExC7DQkJxuk7/edit?usp=sharing&ouid=117772898957068889268&rtpof=true&sd=true' target="blank">Resume</MDBNavbarLink>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;