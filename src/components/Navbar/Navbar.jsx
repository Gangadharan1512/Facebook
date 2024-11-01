import React from 'react'
import './Navbar.css'
import facebook from '../../assets/Navbar/facebook.png'
import home from '../../assets/Navbar/home.png'
import bell from '../../assets/Navbar/bell-ring.png'
import friends from '../../assets/Navbar/friends.png'
import menu from '../../assets/Navbar/menu.png'
import messenger from '../../assets/Navbar/messenger.png'
import people from '../../assets/Navbar/people.png'
import user from '../../assets/Navbar/user.png'
import video from '../../assets/Navbar/video.png'
import console from '../../assets/Navbar/console.png'
import search from '../../assets/Navbar/search.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();


    return (


    <div className='navbar'>
        <div className="left">
            <img className='face-icon' src={facebook} alt="" />
            <div className="search">
                <img src={search} alt="" />
                <p>Search Facebook</p>
            </div>
        </div>

        <div className="center">
            <img src={home} alt="" />
            <img src={friends} alt="" />
            <img src={video} alt="" />
            <img src={people} alt="" />
            <img src={console} alt="" />
        </div>

        <div className="right">
            <img src={menu} alt="" />
            <img src={messenger} alt="" />
            <img src={bell} alt="" />
            <img onClick={()=>navigate('/login')} src={user} alt="" />
        </div>
    </div>
  )
}

export default Navbar