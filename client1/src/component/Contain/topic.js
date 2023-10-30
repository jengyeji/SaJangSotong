import React from 'react'


const topic = [
  {id:1,
  nickname: '부산 갈매기',
  title: '사장님들오늘 매출 어떠신가요?'
  },
  {id:2,
    nickname: '울산 앞바다',
    title: '오늘 날씨가 좋네요!'
    },
  {id:3,
   nickname: '서울 멋쟝이',
   title: '오늘 날씨가 좋네요!'
  },
  {id:4,
    nickname: '쩝쩝박사',
    title: '사장님들~ 진상손님이 오면 어떻게 대처해야할까요?'
    },
  {id:5,
    nickname: '가가가',
    title: '월8000매출, 중식당 운영하실분~~!'
  },
  {id:6,
    nickname: '케이크금손',
    title: '카페 사장님들 ~ 당근케이크 레시피 공유합니다^^'
  },
  {id:7,
    nickname: '대전고무장갑',
    title: '고무장갑 도매가로 싸게 팝니다'
  },
  {id:8,
    nickname: '몸매짱',
    title: '00헬스장 프론트 알바 구합니다ㅜ ㅜ'
  },
]


function Topic( props ) {
  return (
    <div style={{ width: '85%', margin: '0 auto', borderBottom: '0.5px dashed grey' }}>
      <div style={{marginTop:'10px', marginBottom:'10px'}} >
        <div className='topicTitle'>{props.title}</div>
        <div className='topicNickname'>{props.nickname}</div>
        <div style={{display:'flex'}}className='TopicIcon'>
        <div className='heart'>💗 0</div>
        <div style={{ marginLeft: '25px' }}>😈 0</div>
        </div>
      </div>
    </div>
  )
}


function Topics(){
  return(
    <div className='topicResult'>{topic.map(Topic)}</div>
  )
}



export default Topics;
