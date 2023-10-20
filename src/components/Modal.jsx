import React from 'react'
import "./modal.css"
import image from "../Assets/newsletter.png"
import { useState } from 'react'

const Modal = () => {
    const [showNav, setShowNav] = useState(true);
  return (
    <>
        <div className="modal" style={{display: showNav ? 'initial' : 'none'}}>
            <div className="modal-content">
                <div className="modal-close-btn" >
                    <button onClick={() => setShowNav(false)} className="bg-primary w-32 h-12 rounded-lg text-white">Close</button>
                </div>

                <div className="newsletter-img">
                    <img src={image} alt="subscribe newsletter" width="400" height="400"/>
                </div>

                <div className="newsletter">

                    <form action="#">
                    <div className="newsletter-header">
                        <h3 className="newsletter-title bayo">Welcome to Elite-Blog</h3>
                    </div>
                    </form>

                </div>

            </div>

        </div>

    </>

  )
}

export default Modal