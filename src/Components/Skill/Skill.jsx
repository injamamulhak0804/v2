import React from 'react'
import './Skill.css'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoReact } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3 } from 'react-icons/bi'
import { FaGithubAlt, FaBootstrap } from 'react-icons/fa'

const Skill = () => {
    return (
        <>
            <div className="skill">
                <div className="container-lg container-skill">
                    <div className="content-skill">
                        <p>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
                        <h1>Skills & Experience</h1>
                        <p>The main area of expertise is front end development <span className='purple'>(client side of the web)</span>.</p>
                        <p className='content-in-skill'>
                            HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress
                        </p>
                        <div className="skills-logo">
                           <div className="js">
                                <RiJavascriptFill className='logo' />
                                <p>Javascript</p>
                           </div>
                           <div className="react">
                                <BiLogoReact className='logo' />
                                <p>React</p>
                           </div>
                            <div className="node">
                                <FaNodeJs className='logo' />
                                <p>Node.js</p>
                            </div>
                            <div className="express">
                                <SiExpress className='logo' />
                                <p>Express.js</p>
                            </div>
                            <div className="html">
                                <AiFillHtml5 className='logo' />
                                <p>HTML</p>
                            </div>
                            <div className="css">
                                <BiLogoCss3 className='logo' />
                                <p>CSS</p>
                            </div>
                            <div className="git">
                                <FaGithubAlt className='logo' />
                                <p>Git & GitHub</p>
                            </div>
                            <div className="Bootstrap">
                                <FaBootstrap className='logo' />
                                <p>Bootstrap 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Skill

