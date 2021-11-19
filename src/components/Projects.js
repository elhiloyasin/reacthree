import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap/';
import HomeGrown from '../images/homegrown.png';
import TeamProfile from '../images/teamgeneratorprofile.png'
import Html from '../images/html.png';
import Css from '../images/css.jpg';
import JavaScript from '../images/javascript.png';






function Projects() {




    return (

        <>
            <div>
                <div className='projects-title'>
                    <h1>Projects</h1>
                </div>
                <div className='frontend-title'>
                    <h2>FRONT-END</h2>
                </div>
            </div>

            <Container className="text-white ">
                <Row xs={1} md={2}>
                    <Col>
                        <Card.Img className='homegrown-image' src={HomeGrown} alt="homegrown" />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title className="frontendone-title"> HOME GROWN </Card.Title>
                            <Card.Text className='frontendone-description'>
                                Home Grown is a  website to help the user find local businesses near the user's area of interest. Primarly Home Grown was built with the intention of helping mom and pop shops during the Covid-19 period.<br></br>
                                <p id='technologies-used-title'>TECHNOLOGIES USED</p>
                                <img src={Html} className='tech-used' />
                                <img src={Css} className='tech-used' />
                                <img src={JavaScript} className='tech-used' />
                            </Card.Text>
                            <div className='homegrown-buttons'>
                                <a href="https://github.com/elhiloyasin/HomeGrown" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://sbharadw.github.io/HomeGrown" target="_blank"><Button variant="success">GITHUB</Button></a>
                            </div>
                        </Card.Body>
                    </Col>


                    <Col>
                        <Card.Img className='teamprofile-image' src={TeamProfile} alt="team-profile" />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title className="frontendtwo-title"> TEAM PROFILE GENERATOR </Card.Title>
                            <Card.Text className='frontendtwo-description'>
                            The main concept of this application is to ask the user about the the individuals that the user works with, based on the users response we then create cards that generate a descriptive profile of each indiviual that is a part of that users team.<br></br>
                                <p id='technologies-used-title'>TECHNOLOGIES USED</p>
                                <img src={Html} className='tech-used' />
                                <img src={Css} className='tech-used' />
                                <img src={JavaScript} className='tech-used' />
                            </Card.Text>
                            <div className='teamprofile-buttons'>
                                <a href="https://github.com/elhiloyasin/HomeGrown" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://sbharadw.github.io/HomeGrown" target="_blank"><Button variant="success">GITHUB</Button></a>
                            </div>
                        </Card.Body>
                    </Col>


                    
                </Row>
            </Container>

                <div className='backend-title'>
                    <h2>BACK-END</h2>
                </div>
                <Container className="text-white ">
                <Row xs={1} md={2}>
                
                    <Col>
                        <Card.Img className='teamprofile-image' src={TeamProfile} alt="team-profile" />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title className="frontendtwo-title"> TEAM PROFILE GENERATOR </Card.Title>
                            <Card.Text className='frontendtwo-description'>
                            The main concept of this application is to ask the user about the the individuals that the user works with, based on the users response we then create cards that generate a descriptive profile of each indiviual that is a part of that users team.<br></br>
                                <p id='technologies-used-title'>TECHNOLOGIES USED</p>
                                <img src={Html} className='tech-used' />
                                <img src={Css} className='tech-used' />
                                <img src={JavaScript} className='tech-used' />
                            </Card.Text>
                            <div className='teamprofile-buttons'>
                                <a href="https://github.com/elhiloyasin/HomeGrown" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://sbharadw.github.io/HomeGrown" target="_blank"><Button variant="success">GITHUB</Button></a>
                            </div>
                        </Card.Body>
                    </Col>


                    
                </Row>
            </Container>








        </>

    )

}


export default Projects