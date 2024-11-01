import React from 'react'
import './LeftDisplay.css'
import user from '../../assets/Navbar/user.png'
import friends from '../../assets/Left Display/friend.png'
import memories from '../../assets/Left Display/memories.png'
import save from '../../assets/Left Display/save-instagram.png'
import group from '../../assets/Left Display/group.png'
import video from '../../assets/Left Display/video c.png'
import shop from '../../assets/Left Display/shop.png'
import seemore from '../../assets/Left Display/down-arrow.png'


const LeftDisplay = () => {
  return (
    <div className='left-display'>
      <div className="field">
        <img src={user} alt="" />
        <p>Name</p>
      </div>
      <div className="field">
      <img src={friends} alt="" />
        <p>Friends</p>
      </div>
      <div className="field">
      <img src={memories} alt="" />
      <p>Memories</p>
      </div>
      <div className="field">
      <img src={save} alt="" />
      <p>Saved</p>
      </div>
      <div className="field">
      <img src={group} alt="" />
      <p>Groups</p>
      </div>
      <div className="field">
      <img src={video} alt="" />
      <p>Video</p>
      </div>
      <div className="field">
      <img src={shop} alt="" />
      <p>Marketplace</p>
      </div>
      <div className="field">
      <img src={seemore} alt="" />
      <p>See more</p>
      </div>
      <hr />
    </div>
  )
}

export default LeftDisplay