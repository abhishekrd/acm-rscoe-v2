import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import EventTimeline from '../../components/event-timeline/EventTimeline'
import "./Event.scss"
const Event = () => {
  return (
    <div>
    <Navbar/>
    <EventTimeline />
    <Footer/>
    </div>
  )
}

export default Event