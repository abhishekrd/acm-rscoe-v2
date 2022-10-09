import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import EventTimeline from '../../components/event-timeline/EventTimeline'
import "./Event.scss"
const Event = () => {
  return (
    <div>
      <Navbar />
      <section className="event-container">
        <div className="front-video">
          <video className='vid' autoPlay loop muted src="./assets/event-page-bg.mp4"></video>
        </div>
        <EventTimeline />
      </section>

      <Footer />
    </div>
  )
}

export default Event