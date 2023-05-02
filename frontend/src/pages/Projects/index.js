import React from 'react';
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBBtn, MDBImg} from 'mdb-react-ui-kit';
import cruiseAmerica from './assets/screenRecording1.gif'
import cruiseAmerica2 from './assets/screenRecording2.gif'

function Projects() {
  return (
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
          <img class="img-fluid" src={cruiseAmerica}></img>
            <MDBCardTitle>Cruise America</MDBCardTitle>
            <MDBCardText>
            MEN-stack app with full CRUD functionality using Javascript on Node.js and Express frameworks; data stored using MongoDB database through Mongoose, and used EJS partials
                Utilized Railway to deploy a full stack app; two models with full CRUD functionality
                Created wireframes and drafted user stories using Wireframe Pro.
            </MDBCardText>
            <MDBBtn href='https://cruise-north-america.herokuapp.com/' target="_blank">Go to Cruise America</MDBBtn>
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
            <MDBBtn href='https://cryptosis-app.herokuapp.com/' target="_blank">Go to Cryptosis</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default Projects;