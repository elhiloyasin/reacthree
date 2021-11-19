import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap/';
import HomeGrown from '../images/homegrown.png';
import TeamProfile from '../images/teamgeneratorprofile.png'
import Progressive from '../images/progressiveapp.png';
import Flamengo from '../images/flamengo.png';
import Html from '../images/html.png';
import Css from '../images/css.jpg';
import JavaScript from '../images/javascript.png';
import Node from '../images/node.png';
import mongodb from '../images/mongodb.png';
import Express from '../images/express.png';





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
                                <a href=" https://sbharadw.github.io/HomeGrown" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://github.com/elhiloyasin/HomeGrown " target="_blank"><Button variant="success">GITHUB</Button></a>
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
                                <a href="https://bit.ly/30DdlrA" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://github.com/elhiloyasin/Team-Profile-Generator" target="_blank"><Button variant="success">GITHUB</Button></a>
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
                        <Card.Img className='progressive-image' src={Progressive} alt="progressive" />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title className="progressive-title"> PROGRESSIVE APP</Card.Title>
                            <Card.Text className='progressive-description'>
                                The purpose of this application is to save the budgets we submited to mongodb database while we are working online, but if we happen to be working offline the submitted budgets will be stored in indexDb that is index database which is a front end database. As soon as we find a network then the stored data at the front-end that is in the indexDb will be stored automatically to mongodb database.<br></br>
                                <p id='technologies-used-title'>TECHNOLOGIES USED</p>
                                <img src={Html} className='tech-used' />
                                <img src={Css} className='tech-used' />
                                <img src={JavaScript} className='tech-used' />
                                <img src={Node} className='tech-used' />
                                <img src={mongodb} className='tech-used' />
                                <img src={Express} className='tech-used' />
                            </Card.Text>
                            <div className='progressive-buttons'>
                                <a href="https://infinite-lowlands-94253.herokuapp.com/" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://github.com/elhiloyasin/progressive-app" target="_blank"><Button variant="success">GITHUB</Button></a>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
            <div className='fullstack-title'>
                <h2>FULL-STACK</h2>
            </div>

            <Container className="text-white ">
                <Row xs={1} md={2}>
                    <Col>
                        <Card.Img className='flamengo-image' src={Flamengo} alt="Flamengo" />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title className="flamengo-title">Flamengo</Card.Title>
                            <Card.Text className='flamengo-description'>
                                The purpose of this application is to save the budgets we submited to mongodb database while we are working online, but if we happen to be working offline the submitted budgets will be stored in indexDb that is index database which is a front end database. As soon as we find a network then the stored data at the front-end that is in the indexDb will be stored automatically to mongodb database.<br></br>
                                <p id='technologies-used-title'>TECHNOLOGIES USED</p>
                                <img src={Html} className='tech-used' />
                                <img src={Css} className='tech-used' />
                                <img src={JavaScript} className='tech-used' />
                                <img src={Node} className='tech-used' />
                                <img src={mongodb} className='tech-used' />
                                <img src={Express} className='tech-used' />
                            </Card.Text>
                            <div className='flamengo-buttons'>
                                <a href="https://vast-reaches-08581.herokuapp.com/homepage.html" target="_blank"><Button variant="danger">DEMO</Button></a>
                                <a href="https://github.com/elhiloyasin/Flamengo" target="_blank"><Button variant="success">GITHUB</Button></a>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>

        </>

    )

}


export default Projects