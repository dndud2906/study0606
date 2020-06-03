import React, { useState } from 'react'
import Container from '../components/shared/container'
import Text from '../components/shared/text'
import Img from '../components/shared/image'
import Button from '../components/shared/button'

const items = [
  {
    id: 0,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '다다픽',
    content: '이거 하나만 있으면 다 고쳐, 1만원대 60% 초특가~!',
  },
  {
    id: 1,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '폰뿌',
    content: '이거 만든사람?, 정말 천재 아닐까?',
  },
  {
    id: 2,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: 'DTRT',
    content: 'DTRT 첫경험, 100원에 이거 다!',
  },
  {
    id: 3,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '폰뿌',
    content: '이게 정말 뭐길래 ?, 만든사람 상줘야돼 !',
  },
  {
    id: 4,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: 'WEBSKIN',
    content: '요즘 다 이거 신더라, 소문의 칼로리버닝 운동화',
  },
  {
    id: 5,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '고려생활건강',
    content: '장거리 운전에도 문제없어',
  },
  {
    id: 6,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '더액션',
    content: '레깅스일체형 팬츠, 인사이드 포켓까지',
  },
  {
    id: 7,
    img:
      'https://s.pstatic.net/shopping.phinf/20200514_16/0300b6b7-9d36-4a2a-a652-435211cb9759.jpg',
    title: '앱스토리몰',
    content: '음질 실화야?, 이 가격 또 없어!',
  },
]

function ItemList({ cnt }) {
  console.log(cnt)
  return items.map(({ id, img, title, content }, idx) => {
    if (Math.floor(id / 3) === cnt) {
      return (
        <Container flex margin="0 0 20px 0" key={idx}>
          <Img src={img} alt={title} />
          <Container flex column padding="10px 0 0 25px">
            <Text size="18" bold margin="0 0 10px 0">
              {title}
            </Text>
            {content.split(',').map((text, idx) => (
              <Text size="18" margin="0 0 8px 0" key={idx}>
                {text}
              </Text>
            ))}
          </Container>
        </Container>
      )
    }
  })
}

function PracticePage() {
  const [cnt, setCnt] = useState(0)

  const handleNext = () => {
    setCnt(cnt + 1)
  }
  const handlePrev = () => {
    setCnt(cnt - 1)
  }
  return (
    <Container>
      <Container margin="0 0 10px 0" flex between>
        <Text bold size="25">
          PLAY . FUN
        </Text>
        <Container>
          <Text bold size="25">
            {cnt + 1}&nbsp;
          </Text>
          <Text bold size="25" color="red" margin="0 20px 0 0">
            /&nbsp;{Math.ceil(items.length / 3)}
          </Text>
          {cnt === 0 ? (
            <Button disabled fontSize="25" margin="0 5px 0 0">
              〈
            </Button>
          ) : (
            <Button onClick={handlePrev} fontSize="25" margin="0 5px 0 0">
              〈
            </Button>
          )}
          {cnt === 2 ? (
            <Button disabled fontSize="25">
              〉
            </Button>
          ) : (
            <Button onClick={handleNext} fontSize="25">
              〉
            </Button>
          )}
        </Container>
      </Container>

      <Container>
        <ItemList cnt={cnt} />
      </Container>
    </Container>
  )
}

export default PracticePage
