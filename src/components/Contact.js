import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImFileEmpty } from "react-icons/im";
import { IconContext } from 'react-icons';



function Contact() {
    return (
        <>

            <div className='contact-title'>
                <h1>Contact</h1>
            </div>
            {/* box-shadow: 0px 0px 12px -4px #000000; */}
            <div>
                <h1 id='contact-me'> Get In Touch!</h1>

                <div className='contact-info'>
                    <p>
                        Have a question? <br />
                    Let's get to know each other. <br /> How can I be useful to your service? <br />
                    Please feel free to reach out to me. <br />I would be delighted to answer all your questions or concerns.
                
                    </p>
                    <IconContext.Provider value={{ className: 'icon-contacts', size: '2.5rem' }}>
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
                </div>

            </div>
























        </>
    )

}


export default Contact