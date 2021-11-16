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
                        <Image  id='image'src={Yaze} thumbnail />
                    </Col>
                </Row>


                <div className='bio-info'>
                    <p>
                        Hello there, I'm Kelvin, a former Divison One Track and Field athlete that turned into a Full Stack Software Engineer. I spend most of my time learning ways to improve and implement a plethora of gained skills, adding value throughout professional endeavors. As Michael Josephson once stated, "Life never stops teaching. Be sure you never stop learning." Ever since I began learning programming I grew a passion for learning that I’ve made it into a daily habit. With technology growing at a faster pace than the speed of light, there is still an abundance of technologies I am willing to learn in the future and especially in the work field.


                        If there's anything amazing about programming, it is the ability to create anything imagined. It's challenging, fulfilling, and of course a major headache yet worth every ounce of effort.


                        In my off days of coding, I enjoy spontaneous adventures, whiskey, video games, listening to podcasts, working out and sports. I love mentoring upcoming software engineers with a strong passion like myself and lead them to a bright future. I am fluent in Spanish and English. Feel free to communicate with me whichever language you feel comfortable.
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