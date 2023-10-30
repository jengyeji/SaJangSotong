import React from 'react'
import { Cascader } from 'antd';

const AreaOptions = [
  {
    value: '서울',
    label: '서울',
    children: [
      {
        value: '용산구',
        label: '용산구',
        children: [
          {
            value: '용산동',
            label: '용산동',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = (value) => {
  console.log(value);
};


const Area = () => {
  return (
    <div style={{ display: "flex", justifyContent: 'center' }}>
      <div className="AreaSelect">   지역 선택  : </div>
      <Cascader options={AreaOptions} onChange={onChange} placeholder="Please select" />;

    </div>
  )
}

export default Area
