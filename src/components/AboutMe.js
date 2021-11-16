import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Yaze from '../styling/yaze.jpg';


function AboutMe() {
    return (

        <>
            <div className='title-container'>
                <h1>About Me</h1>
            </div>
            <Container>

                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image  
                        id='image'
                        src={Yaze} 
                        thumbnail />
                    </Col>
                </Row>

                <div className='bio-info'>
                    <p>
                        Hello there, I'm Yasin Elhilo, a software engineer with a deep passion for software engineering. Lover of learning and staying up-to-date on the latest industry trends and advancements. Excited to leverage a thirst for knowledge and a versatile skill set to further business objectives while exceeding quality standards.
                    </p>

                </div>
            </Container>
            
            {/* <div class='biography'>
                <div id='image'>
                    <img src={Image} alt='sexy'></img>
                </div>
               


            </div> */}

        </>







    )
}



export default AboutMe