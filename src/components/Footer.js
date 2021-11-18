import React from 'react'
import '../styling/footer.css';
import { Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImFileEmpty } from "react-icons/im";
import { IconContext } from 'react-icons'



function Footer() {
  return (
    
    <Card>

      <Card.Body className='footer-color icons'>
        <Card.Text>
          <IconContext.Provider value={{ className: 'icons' , size: '1.3rem'}}>
            <a href="https://www.linkedin.com/in/yasinelhilo/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://github.com/elhiloyasin?tab=repositories" target="_blank">
              <FaGithub />
            </a>
            <a href="https://bit.ly/3CCzwvT" target="_blank">
              <MdEmail />
            </a>
            <a href="https://docs.google.com/document/d/1Bv84tGCBhyWEUkxecOpT2x9q1ClG63eqRTxgHxZpudc/" target="_blank">
            <ImFileEmpty />
            </a>

          </IconContext.Provider>

        </Card.Text>
        <Card.Text className="text-copyright">© 2021 Copyright: Yasin Elhilo</Card.Text>


      </Card.Body>
    </Card>



  )
}

export default Footer
