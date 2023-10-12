import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container-lg containers-contact">
          <div className="contact-head">
            <h1>What's next ?</h1>
          </div>
          <div className="contact-content">
            <h2>GET I<span className='purple'>N TOUCH</span></h2>
            <p>
              My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <center>
              <button className='hover-2'>
                <a href="mailto:injamamulhak080404@gmail.com" className="email">Say Hello</a>
                {/* <a href="mailto:injamamulhak080404@gmail.com">Send Email</a> */}
              </button> 
            </center>
          </div>
        </div>
        <p className='design-art'>Design and Bulid by In Jamamul Hak</p>
      </div>
    </>
  )
}
export default Contact