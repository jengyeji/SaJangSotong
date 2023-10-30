import style from './NaviBar.css';
import React from 'react';
import logo from './logo.png';
import { Input } from 'antd';

const { Search } = Input;

function NaviBar() {
  return (
    <div className='nap' style={{style}}>
      <div className='naviWrap'>
        <a href="/" className = 'changeLogo'>
          <img  className='logo' src ={logo}/>
        </a>
        <ul className='navi'>
          <a href ="/Sotong" className="changeAdvertising">
            <li >소통하기</li>
          </a>

          <a href ="/Advertising" className="changeSotong">
          <li>광고물 구매</li>
          </a>
          <li>일자리</li>
          <li>직거래</li>
        </ul>
        <Search className='search' placeholder="input search text" onSearch enterButton />
        
      </div>
    </div>
  )
}

export default NaviBar
