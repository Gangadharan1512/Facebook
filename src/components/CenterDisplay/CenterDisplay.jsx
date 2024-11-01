import React from 'react'
import './CenterDisplay.css'
import user from '../../assets/Navbar/user.png'
import cenvideo from '../../assets/Center Display/cenvideo.png'
import happy from '../../assets/Center Display/happy.png'
import pnv from '../../assets/Center Display/photo-and-video.png'
import StoryComp from '../StoryComp/StoryComp'
import PostComp from '../PostComp/PostComp'

const CenterDisplay = () => {
  return (
    <div className='center-display'>
      <div className='thought'>
        <div className="thought-top">
          <img src={user} alt="" />
          <input type="text" placeholder="What's in your mind" />
        </div>
        <hr />
        <div className="thought-bottom">
          <div className='th-bo-f'>
            <img src={cenvideo} alt="" />
            <p>Live Video</p>
          </div>
          <div className='th-bo-f'>
            <img src={pnv} alt="" />
            <p>Photo/Video</p>
          </div>
          <div className='th-bo-f'>
            <img src={happy} alt="" />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
      <StoryComp />
      <PostComp />
    </div>
  )
}

export default CenterDisplay