import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import headshot from './assets/headshot.png';
import './index.css';

const Aboutme = () => {
    return (
        <div class="text-center">
        <MDBCard>
        <MDBCardImage position='top' className="avatar" src={headshot}></MDBCardImage>
        <MDBCardTitle>Software Engineer</MDBCardTitle>
          <MDBCardBody>
            I am a highly skilled software engineer with a background in Management Information Systems, dedicated to delivering innovative solutions that improve business processes and drive results. With a passion for technology, I leverage my expertise to solve complex problems and help businesses achieve their goals. </MDBCardBody>
        </MDBCard>
        </div>
      );
    }
export default Aboutme;