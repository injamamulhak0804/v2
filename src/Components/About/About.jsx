import React from 'react'
import './About.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
const About = () => {
    return (
        <>
            <div className="about">
                <div className="fixed">
                    <span className="line"></span>
                    <div className="logo">
                        <p>
                            <a href="https://github.com/injamamulhak0804">
                                <AiFillGithub />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/injamamulhak/">
                                <AiFillLinkedin />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/mr.brad_ford/">
                                <AiOutlineInstagram />
                            </a>
                        </p>
                    </div>
                </div>
                <div className="right-fixed">
                    <p>&lt;</p>
                    <p>scroll Down</p>
                </div>
                <div className="containers container-lg">
                    <div className="row rows">
                        <div className="col-12 col-md-6 col">
                            <div className="hero-name">
                                <h3><span className='purple'>Hi, I'</span>m Zamam</h3>
                                <h3> Web Developer</h3>
                                <p>Font End Developer / Javascript / React</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col">
                            <p className='abour-para'>
                                Hello ! You'll just call me Zamam (Injamamul Hak). I adore producing content for the internet. When I decided to try editing in Photoshop in 2020, it led to me learning some OOPs programming idea languages like C++, Python, and Java during my university study. From there, I made the decision to begin my career in web development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About