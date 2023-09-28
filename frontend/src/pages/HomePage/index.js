import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import headshot from './assets/headshot.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import './index.css';
import anime from "animejs";

function HomePage() {
  useEffect(() => {

    anime.timeline({loop: true})
    .add({
      targets: '.ml8 .circle-white',
      scale: [0, 3],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100
    }).add({
      targets: '.ml8 .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.ml8 .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.ml8 .letters-left',
      scale: [0, 1],
      duration: 1200,
      offset: '-=550'
    }).add({
      targets: '.ml8 .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.ml8',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1400
    });
  
  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });
  }, []);

  return (
    <div>
      <h1 class="ml8">
  <span class="letters-container">
    <span class="letters letters-left">Hi Nice to meet you!</span>
    <span class="letters bang">!</span>
  </span>
  <span class="circle circle-white"></span>
  <span class="circle circle-dark"></span>
  <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
      </h1>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      {/* <div className="homeHeader">
        <div className='p-5 text-center bg-dark text-light'>
          <h1 className="animationHead">
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">Hi Nice to meet you!</span>
              <br />
              <span className="letters">My name is Milad, and I'm a Software Engineer</span>
              <span className="line line2"></span>
            </span>
          </h1>
          <div className="text-center">
            <MDBCardImage position='top' className="avatar" src={headshot}></MDBCardImage>
            <MDBCardBody className="aboutDescription">
              I am a highly skilled software engineer with a background in Management Information Systems, dedicated to delivering innovative solutions that improve business processes and drive results. With a passion for technology, I leverage my expertise to solve complex problems and help businesses achieve their goals.
            </MDBCardBody>
            <h1 className="icons">
              <h2>Skills</h2>
              <MDBIcon fab icon="css3" /> <MDBIcon fab icon="css3-alt" /> <MDBIcon fas icon="database" /> <MDBIcon fab icon="github-square" /> <MDBIcon fab icon="html5" /> <MDBIcon fab icon="js" /> <MDBIcon fab icon="node" /> <MDBIcon fab icon="npm" /> <MDBIcon fab icon="python" /> <MDBIcon fab icon="react" /> <MDBIcon fab icon="sass" /> <MDBIcon fab icon="wordpress" /> <MDBIcon fab icon="bootstrap" />
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;