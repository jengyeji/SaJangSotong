import React from 'react'
import { Cascader } from 'antd';

const AreaOptions = [
  {
    value: '서울',
    label: '서울',
    children: [
      {
        value: '대전',
        label: '대전',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
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
    <div>
      <Cascader options={AreaOptions} onChange={onChange} placeholder="Please select" />;
    </div>
  )
}

export default Area
