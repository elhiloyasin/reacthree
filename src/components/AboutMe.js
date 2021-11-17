
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Yaze from '../images/yaze.jpg';






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
                        Hello there, I'm Yasin Elhilo, a Full Stack Web Developer with a deep passion for Web development. Lover of learning and staying up-to-date on the latest industry trends and advancements. Excited to leverage a thirst for knowledge and a versatile skill set to further business objectives while exceeding quality standards.
                    </p>
                   
                </div>
                <div className='skills-title'>
                        <h1>Skills</h1>
                    </div>
                
                <menu>
                    <div id='frontend-title'>
                    <h2>Front-End</h2>
                    </div>
                    <div className='technologies'>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>React.js</p>
                    <p>Bootstrap</p>
                    <p>JQuery</p>
                    <p>Handlebars</p>


                
                
                    </div>
                    
                    <div className='back-end'>






                    </div>

                  


                </menu>

            </Container>



        </>



    )
}



export default AboutMe