
import React from 'react'
import style from './Bottom.css'
import{InstagramOutlined,FacebookOutlined} from '@ant-design/icons'

const Bottom = () => {
  return (
    <div style={{style}} className='bottom'>
      <div className="bottomTopWrap">
      <div className='bottomTop_One'>
        <ul className='botserviceList'>소통하기</ul>
        <ul className='botserviceList'>광고/판촉물</ul>
        <ul className='botserviceList'>일자리</ul>
        <ul className='botserviceList'>직거래</ul>
      </div>
      <div className='bottomTop_Two'>
      <ul className='botImporList'>자주 묻는 질문</ul>
      <ul className='botImporList'>회사소개</ul>
      <ul className='botImporList'>인재채용</ul>
      </div>
      <div className='bottomTop_Three'>
        <ul className='botIcon'><a href=""><InstagramOutlined /></a></ul>
        <ul className='botIcon'><a href=""><FacebookOutlined /></a></ul>
      </div>
      </div>
      <hr/>
      <div className='bottomOne'>
        <div className='bot'>
          <span> <strong>대표</strong> 홍길동 </span> <span> | </span> 
         <span> <strong> 사업자번호</strong> 111-11-111111</span>
        </div>
        <div className='bot'><strong>직업정보제공사업 신고번호</strong>J11111111111</div>
        <div className='bot'><strong>주소</strong> 서울특별시 서울구 서울로1번길 1, 101호(전국커뮤니티서비스)</div> 
        <div className='bot'>
        <span> <strong>전화</strong> 1544-1111 </span> <span> | </span> 
        <span> <strong>고객문의</strong> cs@sajanggg.com</span>  
        </div> 
        <hr/>
      </div>
      <div className='bottomTwo'>
        <a className='two_a'>이용약관</a>
        <a className='two_a'>개인정보처리방침</a>
        <a className='two_a'>위치기반서비스 이용약관</a>
        <a className='two_a'>이용자보호 비전과 계획</a>
        <a className='two_a' >청소년보호정책</a>
      </div>
    </div>
    
  )
}

export default Bottom
