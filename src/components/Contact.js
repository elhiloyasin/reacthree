import React from 'react';
import { Row, Container, Col } from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';


function Contact() {
    return (
        <>

            <div className='contact-tile'>
                <h1>Contact Me!</h1>
            </div>

            <Container>
                <Row className="row">
                    <Col >
                    <Card.Body className='mx-auto'>This is some text within a card bodydsfasdfasdfadsfasdfasdfasdfasdf.</Card.Body>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    <Card.Body>This is some text within a card body.</Card.Body>

                    <Card.Body>This is some text within a card body.</Card.Body>



                    </Col>
                    <Col>

                    <Card.Body>This is some text within a card bodydsfasdfasdfadsfasdfasdfasdfasdf.</Card.Body>
                    </Col>



                </Row>



            </Container>


        </>
    )

}


export default Contact