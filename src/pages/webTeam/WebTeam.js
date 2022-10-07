import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Web.scss"
const WebTeam = () => {
  return (
    <div >
      <Navbar />
      <div className="home">
        <section className='front-page'>
          <div className='container'>
            <div className="team-name">
              <h1>WEB TEAM</h1>
              <p className='info'>Web team is a group of persons responsible for development of web site.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://github.com/abhishekrd" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/webteam/abhishekdhanke.png" alt="head-img" /></div> <span> Abhishek Dhanke</span></div> </a></p>
            </div>
            <img src="./assets/web-home.png" alt="home" className='homeImg' />
          </div>
        </section>

        <section className='team-mem-card'>
          <div className='title'>
            Team
            <hr />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default WebTeam