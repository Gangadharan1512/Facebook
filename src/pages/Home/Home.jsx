import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Display from '../../components/Display/Display'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Display />
    </div>
  )
}

export default Home