
import React from 'react'
import SotongDetail from "./SotongDetail"
import job from '../SotongUl/job.png';
import Area from '../Area/Area';

const SotongCook = () => {
  return (
    <div style={{width:'100%', marginTop:'80px'}} className='CookDetail'>
      <div style={{width:'80%', margin:'0 auto'}} className='SotongWrap'>
      <div style={{width:'100%', height:'800px', display:'flex'}}>
       <img style={{width:'100%',height:'100%'}} className='CookMainImg' src={job}/> 
       <div className='sotongMainText'>요식업</div>
      
      </div>
      <div className='sotongButtonTitle'>요식업</div>
      <Area style={{display:'flex', justifyContent: 'flex-end'}}/>
      <div className='Cooktopic'>
        <SotongDetail sotongTitle="오늘은 짜장면데이~~"
         nickName="중식원탑"/>
        <SotongDetail sotongTitle="중식 사장님들 오늘 배달 많겠죠?" nickName="짜장루"/>
        <SotongDetail sotongTitle="오늘 매츨 기대해봅니다" nickName="00동짜장면"/>
        <SotongDetail sotongTitle="오늘은 짜장면데이~~" nickName="중식원탑"/>
      </div>
      </div>
    </div>
  )
}

export default SotongCook;