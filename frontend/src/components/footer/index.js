import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {

    return(
        <MDBFooter bgColor='light' className='text-center text-lg-start text-black'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                <span>Get connected with me on social networks:</span>
                </div>

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
            </section>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon icon="gem" className="me-3" />
                        Milad Tehrani
                    </h6>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                        <MDBIcon icon="home" className="me-2" />
                        San Francisco, Bay Area CA
                    </p>
                    <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        tehranimilad92@gmail.com
                    </p>
                    <p>
                        <MDBIcon icon="phone" className="me-3" /> + 925 202 4374
                    </p>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </section>
            </MDBFooter>
    );
}

export default Footer;