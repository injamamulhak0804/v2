import React from 'react'
import './Home.css'
import VideoBg from '/Light Bulb Going On and Off.mp4'


const Home = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <div className="bgVideo">
        <video src={VideoBg} className='video' autoPlay loop muted />
        <div className="content">
          <div className="conatiner ">
            <div className="name">
              <h1>Front-End Software</h1>
              <h1>Developer</h1>
              <div className="intro">
                <p>
                  I'm a junior developer from Chennai who is primarily interested in
                  creating games and websites right now. My main goal is to create
                  websites that are user-friendly, attractive, and responsive by using various frameworks.
                </p>
                <p className='link'>
                  About me
                  <span className="symbol">
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home