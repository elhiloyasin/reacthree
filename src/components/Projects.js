import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Row, Container, Col} from 'react-bootstrap/';
import Homegrown from '../images/homegrown.png';







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
                    <Card.Img className='homegrown-image' src={Homegrown} alt="homegrown" />
                    </Col>
                    <Col>
                    <Card.Body >
                    <Card.Title className="frontendone-title"> HOME GROWN </Card.Title>
                    <Card.Text className='frontendone-description'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div className='homegrown-buttons'>
                    <Button variant="primary">Demo</Button>
                    <Button variant="success">Github</Button>
                    </div>
                </Card.Body>
                    </Col>
                </Row>
            </Container>


            





        </>

    )

}


export default Projects