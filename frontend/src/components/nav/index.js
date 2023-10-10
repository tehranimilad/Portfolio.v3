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
    <MDBIcon icon="gem" className="me-3" />
      <MDBNavbarBrand href='#' className='text-uppercase'>Milad Tehrani</MDBNavbarBrand>
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
          <MDBNavbarItem>
          <MDBNavbarLink aria-current='page' href='https://docs.google.com/document/d/1TKMFQ6sR580VwZ-Xmw47L4l11jQ1oLBa0Fa7631GEz8/edit?usp=sharing' target="blank">Resume</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
      <div>
      <a href='mailto:tehranimilad92@gmail.com' target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
      </a>
      <a href="https://www.linkedin.com/in/miladtehrani/" target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
      </a>
      <a href="https://www.github.com/tehranimilad" target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
      </a>
      </div>
    </MDBContainer>
  </MDBNavbar>
  );
}