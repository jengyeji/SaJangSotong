
import React from 'react'
import itemImg from './tem.png';
import style from './item.css'
import { Button } from 'antd';
import{ArrowRightOutlined} from '@ant-design/icons'

const Item = () => {
  return (
    <div className='item' style={{style}} >
      <div className='itemWrap'>
        
        <div className='iText'>광고는 전사소에서 해야하는 이유 !</div>
        <img className='itemImg' src={itemImg}/>
        <Button className="itemButton" type="text">광고 구경하러 가기 <ArrowRightOutlined /></Button>
      </div>
    </div>
  )
}

export default Item
