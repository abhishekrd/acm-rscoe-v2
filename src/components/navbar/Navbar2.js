import React from 'react'
import "./Navbar2.scss"
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function Navbar2() {
  return (
    <div className='navbar2'>
      <div className='social-icon'>
        <i className="fa-brands fa-instagram icons"></i>
        <i className="fa-brands fa-facebook icons"></i>
        <i className="fa-brands fa-twitter icons"></i>
      </div>
      <div className='brand-name'>
        <Link to="/" style={{ textDecoration: "none" }}><p className='brand'><span>acm</span>RSCOE</p></Link>
      </div>
      <div id='feedback'>
        <span>FEEDBACK</span> / <span>WRITE</span> / <span>SHARE</span>
      </div>
      <div id="mobile">
        <Tippy content={<span style={{ color: "#fffff" }}>Interested in writing ?</span>}>
          <i class="fa-solid fa-pen-clip icons"></i>
        </Tippy>
        <Tippy content={<span style={{ color: "#fffff" }}>Share blog</span>}>
        <i class="fa-solid fa-share icons"></i>
        </Tippy>
      </div>
    </div>
  )
}

export default Navbar2