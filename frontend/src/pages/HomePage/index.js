import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import headshot from './assets/headshot.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import './index.css';
import anime from "animejs";

function HomePage() {
  useEffect(() => {
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
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
    <div className="homePageDiv">
      <div className="homeHeader">
        <div className='p-5 text-center bg-dark text-light'>
          <h1 class="ml1">
            <span class="text-wrapper">
              <span class="line line1"></span>
              <span class="letters">Hi Nice to meet you!</span>
              <br />
              <span class="letters">My name is Milad, and I'm a Software Engineer</span>
              <span class="line line2"></span>
            </span>
          </h1>
          <div class="text-center">
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
      </div>
    </div>
  );
}

export default HomePage;