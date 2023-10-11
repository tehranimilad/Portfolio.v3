import React, { useEffect } from 'react';
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBBtn, MDBImg} from 'mdb-react-ui-kit';
import cruiseAmerica from './assets/screenRecording1.gif'
import cruiseAmerica2 from './assets/screenRecording2.gif'
import './index.css';
import anime from "animejs";

function Projects() {
  useEffect(() => {
  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml11',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }, []);
  return (
    <div className="projectDiv">
    <div className="text-center">
    <MDBRow>
    <h1 class="ml11">
      <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters">Projects</span>
      </span>
    </h1>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    {/* <h2 className="projectHeader">Projects</h2> */}
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody class="dark">
          <img className="img-fluid" src={cruiseAmerica}></img>
            <MDBCardTitle>Cruise America</MDBCardTitle>
            <MDBCardText>
            MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro.
            </MDBCardText>
            <MDBBtn className="cruiseAmerica-link" href='https://cruise-north-america.herokuapp.com/' target="_blank">Go to Cruise America</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
          <img class="img-fluid" src={cruiseAmerica2}></img>
            <MDBCardTitle>Cryptosis</MDBCardTitle>
            <MDBCardText>
            MERN-stack app with full CRUD functionality using Javascript on Node.js,Express, and React frameworks; relational database stored using MongoDB database through Mongoose. Cryptosis uses third-party API's in order to retrieve Cryptocurrency relevant data. 
            </MDBCardText>
            <MDBBtn className="cryptosis-link" href='https://cryptosis-app.herokuapp.com/' target="_blank">Go to Cryptosis</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
  );
}

export default Projects;