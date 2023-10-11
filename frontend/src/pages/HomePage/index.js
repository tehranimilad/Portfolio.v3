import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow,  MDBCardText} from 'mdb-react-ui-kit';
import headshot from './assets/headshot.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import './index.css';
import anime from "animejs";

function HomePage() {
  useEffect(() => {
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);
  return (
    <div className="main-div">
      <div className="avatar-div">
        <MDBCardImage position='top' className="avatar" src={headshot}></MDBCardImage>
        </div>
        <div className="animation-container">
          <h1 className="ml1">
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">Hi, I'm Milad and I'm a Software Engineer</span>
              <span className="line line2"></span>
            </span>
          </h1>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
          <div className="content-container">
          <MDBRow>
            <MDBCard>
              <MDBCardBody class="dark">
                <MDBCardText className="about-me-description">
                I'm an experienced software engineer with a background in management information systems. I'm dedicated to creating advanced solutions that improve efficiency and achieve goals. I use technology to solve tough problems and help organizations succeed.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </div>
        </div>
        <div className="skills-icons">
        <h1 className="icons">
                <h3 className="skills">Skills:</h3>
                <MDBIcon fab icon="css3" /> <MDBIcon fab icon="css3-alt" /> <MDBIcon fas icon="database" /> <MDBIcon fab icon="github-square" /> <MDBIcon fab icon="html5" /> <MDBIcon fab icon="js" /> <MDBIcon fab icon="node" /> <MDBIcon fab icon="npm" /> <MDBIcon fab icon="python" /> <MDBIcon fab icon="react" /> <MDBIcon fab icon="sass" /> <MDBIcon fab icon="wordpress" /> <MDBIcon fab icon="bootstrap" />
              </h1>
        </div>
    </div>
  );
}

export default HomePage;





