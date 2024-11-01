import React from 'react'
import './RightDisplay.css'
import search from '../../assets/Navbar/search.png'
import user from '../../assets/Navbar/user.png'

const RightDisplay = () => {
  return (
    <div className='right-display'>
      <div className='ri-di-top'>
        <p>Contacts</p>
        <img src={search} alt="" />
        <p>...</p>
      </div>
      <div className="contacts">
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
        <div className="contact-field">
          <img src={user} alt="" />
          <p>Name</p>
        </div>
      </div>
    </div>
  )
}

export default RightDisplay