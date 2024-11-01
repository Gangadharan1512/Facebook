import React from 'react'
import './Display.css'
import LeftDisplay from '../LeftDisplay/LeftDisplay'
import CenterDisplay from '../CenterDisplay/CenterDisplay'
import RightDisplay from '../RightDisplay/RightDisplay'

const Display = () => {
  return (
    <div className='display'>
      <div className="display-left">
        <LeftDisplay />
      </div>
      <div className="display-center">
        <CenterDisplay />
      </div>
      <div className="display-right">
        <RightDisplay />
      </div>
    </div>
  )
}

export default Display