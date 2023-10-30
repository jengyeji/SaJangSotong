import React from 'react'
import NaviBar from '../NaviBar/NaviBar'
import style from './Advertising.css'
import advertisingImg from './advertising.png'
import {Card,Button} from 'antd'
import reflet from './reflet.jpg'
import clothes from './clothes.png'
import banner from './banner.png'
import poster from './poster.png'
const { Meta } = Card;


function Advertising() {
  return (
    <div className='advertising' style={{style}}>
      <NaviBar/>
      <div className='advertisingWrap'>
        <img  className='adverImg' src={advertisingImg} alt='광고물메인이미지'/>
        <div className='adverText'>사장님들의 성공은 곧 저희의 성장입니다.
        <br/>최선을 다해 고민하겠습니다.</div>
      </div>
      <div className='adverList'>
        <Card  className='adverCard' hoverable style={{width: 240,}}
         cover={<img alt="example" src={poster} />}>
         <Meta title="전단지,홍보물" description="사장님들의 요구사항을 바탕으로 전단지를 만들 수 있습니다." />
         <Button className="adverButton" type="primary" danger>
      신청하기
    </Button>
        </Card>
        <Card className='adverCard' hoverable style={{width: 240,}}
         cover={<img alt="example" src={reflet} />}>
         <Meta title="리플렛(2단/3단/4단)" description="사장님들의 요구사항을 바탕으로 전단지를 만들 수 있습니다." />
         <Button className="adverButton" type="primary" danger>
      신청하기
    </Button>
        </Card>
        <Card className='adverCard' hoverable style={{width: 240,}}
         cover={<img alt="example" src={banner} />}>
         <Meta title="현수막/플랜카드" description="행사 현수막, 플랜카드 등 다양한 사이즈의 현수막 주문 가능합니다." />
         <Button className="adverButton" type="primary" danger>
      신청하기
       </Button>
        </Card>
        <Card className='adverCard' hoverable style={{width: 240,}}
         cover={<img alt="example" src={clothes} />}>
         <Meta title="판촉물" description="티셔츠/컵/스티커 등 판촉물에 원하는 디자인을 넣어 주문가능합니다." />
         <Button className="adverButton" type="primary" danger>
      신청하기
    </Button>
        </Card>
        

      </div>
    </div>
  )
}

export default Advertising
