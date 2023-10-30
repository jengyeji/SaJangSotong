import React from 'react'
import style from './Contain.css'
import Topics from './topic.js'

const Contain = () => {
 
  return (
    <div className='contain' style={{ style }}>
      <div>
        <div className='bestTopic'>
          "베트스 토픽"
        </div>
        <Topics />
        
      </div>
    </div>
  )
}



export default Contain
