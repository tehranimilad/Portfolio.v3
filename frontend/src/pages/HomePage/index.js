import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import headshot from './assets/headshot.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import './index.css';

function HomePage () {
return (
    <div className='p-5 text-center bg-dark text-light'>
    <h1 className='mb-6'>Hi, nice to meet you!</h1>
    <h2 className='mb-3'>My name is Milad Tehrani</h2>
    <h4 className='mb-3'>I'm a Software Engineer</h4>
    <div class="text-center">
        <MDBCard background='dark' className='text-white'>
        <MDBCardImage position='top' className="avatar" src={headshot}></MDBCardImage>
          <MDBCardBody>
            I am a highly skilled software engineer with a background in Management Information Systems, dedicated to delivering innovative solutions that improve business processes and drive results. With a passion for technology, I leverage my expertise to solve complex problems and help businesses achieve their goals. 
          </MDBCardBody>
          <MDBCardTitle>
            Skills
          </MDBCardTitle>
          <h1>
          <MDBIcon fab icon="css3" /> <MDBIcon fab icon="css3-alt" /> <MDBIcon fas icon="database" /> <MDBIcon fab icon="github-square" /> <MDBIcon fab icon="html5" /> <MDBIcon fab icon="js" /> <MDBIcon fab icon="node" /> <MDBIcon fab icon="npm" /> <MDBIcon fab icon="python" /> <MDBIcon fab icon="react" /> <MDBIcon fab icon="sass" /> <MDBIcon fab icon="wordpress" /> <MDBIcon fab icon="bootstrap" /> 
          </h1>

          
        </MDBCard>
        </div>
    </div>
    

);
}

export default HomePage