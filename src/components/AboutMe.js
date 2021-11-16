
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Yaze from '../images/yaze.jpg';
import Bootstrap from '../images/bootstrap.png';
import Css from '../images/css.png';
import github from '../images/github.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import jquery from '../images/jquery.png';
import mongodb from '../images/mongodb.png';
import mern from '../images/mern.jpg';
import mysql from '../images/mysql.jpg';
import node from '../images/node.png';
import nodepackage from '../images/nodepackage.png';
import reactjs from '../images/reactjs.png';
import express from '../images/express.png';



// const imagesArray = [Bootstrap, Css, express, github, html, javascript, jquery, mern, mongodb, mysql, node, nodepackage, reactjs];

// {
//     imagesArray.length && imagesArray.map(image => (
     
//        <img src={image}></img>
     
//     ))
//   }



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
                <menu id="skills">
            <div className='skills-title'>
            <h1>Skills</h1>
            
         

            </div>
            <div className='icons'>

            const imagesArray = [Bootstrap, Css, express, github, html, javascript, jquery, mern, mongodb, mysql, node, nodepackage, reactjs];

{
           imagesArray.length && imagesArray.map(image => (
     
       <img src={image}></img>
     







            </div>





                </menu>
            
            </Container>
        
         
               


  

        </>







    )
}



export default AboutMe