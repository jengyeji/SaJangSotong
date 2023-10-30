import React from 'react'


const SotongDetail=({sotongTitle,nickName})=>{
  return(
    <div  style={{ width: '85%', margin: '0 auto', borderBottom: '0.5px dashed grey' }}>
        <div className='sotongTitle' style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '5px', padding: '5px' }}>{sotongTitle}</div>
        <div style={{ fontSize: '0.8rem', marginLeft: '10px' }} className='nickName'>{nickName}</div>
        <div style={{ display: 'flex', marginLeft: '5px', padding: '5px' }}>
          <div className='heart'>💗 0</div>
          <div style={{ marginLeft: '25px' }}>😈 0</div>
        </div>
    </div>
  
)}


export default SotongDetail
