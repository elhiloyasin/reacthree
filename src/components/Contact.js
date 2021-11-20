import React from 'react';
import { Row, Container, Col } from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';


function Contact() {
    return (
        <>

            <div className='contact-title'>
                <h1>Contact</h1>
            </div>

            <Container fluid="md">
                <Row>
                <Card.Title id='contact-me'> Contact</Card.Title>
                    <Col>
                        <Card.Body id='contact-information'>
                           
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Col>




                </Row>



            </Container>


        </>
    )

}


export default Contact