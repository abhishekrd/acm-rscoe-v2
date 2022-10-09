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
<<<<<<< HEAD
              <p className='info'>Web team is a group of persons responsible for development of our official Website.</p>
              <div className='team-card'>
                <img className='lead-photo' src='./assets/teams/webteam/abhishekdhanke.png'></img>
                <p className='lead-name'>Abhishek Dhanke</p>
                <p className='designation'>Web Team Head</p>
                <div className='socials'>
                  <a href='https://github.com/abhishekrd'><i className="fa-brands fa-github icons"></i></a>
                                
                  <a href='https://www.linkedin.com/in/abhishek-dhanke-226354216/'><i className="fa-brands fa-linkedin icons"></i></a>
                </div>
              </div>
=======
              <p className='info'>Web team is a group of persons responsible for development of web site.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://github.com/abhishekrd" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/webteam/abhishek-dhanke-head.png" alt="head-img" /></div> <span> Abhishek Dhanke</span></div> </a></p>
>>>>>>> d6f3fe4e31910276e79a22dc668f578d3a008219
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