
import Nav from "../../components/nav";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import headshot from './assets/headshot.png';



const LearnMore = () => {
    return (
        <div>
            <Button className="backBtn" href="/">Back</Button>
            <Nav />
           
                <Image className="avatar" src={headshot} fluid></Image>
           
                <Container className="learnMoreInfo">
                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="projectTitle">
                            Milad Tehrani
                        </Card.Title>
                        <Card.Text className="projectDesc">
                        I am a highly skilled software engineer with a background in Management Information Systems, dedicated to delivering innovative solutions that improve business processes and drive results. With a passion for technology, I leverage my expertise to solve complex problems and help businesses achieve their goals. 
                        </Card.Text>
                        <Card.Title className="projectTitle">Skills</Card.Title>
                        <Card.Text className="projectDesc">
                        Javascript, React, Python, MongoDB, Node.js, Express, SQL, HTML, CSS, Bootstrap
                        </Card.Text>
                
        
                    </Card.Body>
                    </Card>
                </Container>
        </div>
    )
}

export default LearnMore;