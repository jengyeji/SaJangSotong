import Mi from "./people-2590270_1280.jpg"
import React from 'react'
import Style from './MainImg.css'

function MainImg() {
  return (
    <div className="Main" style={{Style}}>
      <img className="MainImg" src={Mi} alt="메인이미지" />
      <h1>
        "전국 사장님들 오늘도 화이팅입니다!!"
      </h1>

    </div>
  )
}

export default MainImg
