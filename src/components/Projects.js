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

            <Container className="text-white content-center justify-content-md-center">
                <Row>
                    <Col className="flex-end">
                    <Card.Img src={Homegrown} alt="homegrown" />
                    </Col>
                    <Col className="justify-content-md-center">
                    <Card.Body >
                    <Card.Title className="frontendone-title"> HOME GROWN </Card.Title>
                    <Card.Text className='frontendone-description'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Primary</Button>
                    <Button variant="primary">Primary</Button>{' '}
                </Card.Body>
                    </Col>
                </Row>
            </Container>





        </>

    )

}


export default Projects