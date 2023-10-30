import NaviBar from '../NaviBar/NaviBar';
import React from 'react'
import job from './job.png';
import style from './Sotong.css'
import { Button} from 'antd';
import Topics from '../Contain/topic';

//  const buttonText=[
//     {id:'001',
//     type: '요식'},
//     {id:'002',
//     type: '카페'},
//     {id:'003',
//     type: '미용/네일샵'},
//     {id:'004',
//     type: '학원'},
//     {id:'005',
//     type: '애완/펫'},
//     {id:'006',
//     type: '유통업'},
//     {id:'007',
//     type: '마트/판매'},
//     {id:'008',
//     type: '헬스/운동'},
//     {id:'009',
//     type: '프리랜서'}
//   ];

const ButtonText = ({text})=>{
  return(
     <Button className='sotongreButton' type="dashed" danger>{text}</Button>
  )
}

//const Buttonstyle = (props) => {
//  return(
//    <Button className='sotongreButton' type="dashed" danger>{props.type}</Button>
//  )
//}
// '요식' ,'카페','미용/네일/샵','학원','애완/펫', '유통업', '마트/판매', '헬스/운동'

const Sotong = () => {
 
  // const TypeButton = buttonText.map(({type})=>
  //(<Buttonstyle type={type}/>))
  return (
    <div className='sotong' style={{style}} >
      <NaviBar/>
      <div className='sotongMainWrap'>
        <img  className='sotongMainImg' src={job}/>
        <div className='sotongMainText'>업종별로 소통을 할 수 있어요!</div>
      </div>
      <div className='sotongBody'>
        <div className='sotongButtonTitle'>다양한 업종을 선택해서 볼 수 있어요!</div>
        <div className='sotongButton'>
          <a className='sotongA' href="Sotong/Cook">
          <ButtonText className="jobType" text="요식"/>
          </a>
          <ButtonText className="jobType" text="미용/네일/샵"/>
          <ButtonText className="jobType" text="카페"/>
          <ButtonText className="jobType" text="애완/펫"/>
          <ButtonText className="jobType" text="학원"/>
          <ButtonText className="jobType" text="마트/판매"/>
          <ButtonText className="jobType" text="유통업"/>
          <ButtonText className="jobType" text="헬스/운동"/>
          <ButtonText className="jobType" text="프리랜서"/>
      </div>
      <Topics/>
      </div>
      
    </div>
  )
}

export default Sotong
