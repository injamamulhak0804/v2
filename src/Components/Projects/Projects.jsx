import React from 'react'
import './projects.css'
import shoeSite from '/shoes.png'
import Portfolio from '/portfolio.png'
import matriclone from '/matriclone.png'
import weather from '/weather.png'
import recipe from '/recipe.png'
import postapp from '/postapp.png'
import { FaGithubAlt } from 'react-icons/fa'
const Projects = () => {
    return (
        <>
            <div className='projects'>
                <div className="container-lg containers1">
                    <div className="projects-head">
                        <h1 className="p-head">
                            Projects
                        </h1>
                        <p>
                            Here some of my projects based on the client side.
                        </p>
                    </div>
                    <div className="projects-continer">
                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={weather} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Weather App</h3>
                                <a href="https://zamam-weather-app.netlify.app" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/weather-react" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>

                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={matriclone} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Matrimony Clone</h3>
                                <a href="https://zamam-matri-clone.netlify.app" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/matrimonyclone" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>

                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={Portfolio} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Portfolio</h3>
                                <a href="https://zamam-portfolio.netlify.app/" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/v1_Portfolio" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>

                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={shoeSite} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Shoe Site</h3>
                                <a href="https://zamam-shoe-for-sales.netlify.app/" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/Shoe-Site" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>                     

                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={recipe} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Recipe App</h3>
                                <a href="https://zamam-roger.netlify.app/" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/recipe" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>

                        <div className="contents">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={postapp} alt="" />
                            <div className="content-details fadeIn-top">
                                <h3>Post App</h3>
                                <a href="https://postsave.netlify.app/" target="_blank">
                                    <button className='btn btn-primary'>View Site</button>
                                </a>
                                <a href="https://github.com/injamamulhak0804/postapp" target="_blank">
                                    <button className='btn btn-primary'>View Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <center>
                        <a href="https://github.com/injamamulhak0804?tab=repositories">
                            <button className='btn btns btn-primary'>View Code <FaGithubAlt className='icon' /></button>
                        </a>
                    </center>
                </div>
            </div>
        </>
    )
}




export default Projects