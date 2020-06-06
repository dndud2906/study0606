import React, { useState } from 'react'
import styled from 'styled-components'
import { ITEMS } from './itemData'
import Container from '../shared/container'
import Text from '../shared/text'
import Button from '../shared/button'

/**
 * 변하지 않는 값( 한 페이지에 3개의 이미지 나오게!!)
 */
const VISIBLE_COUNT = 3

const Image = styled.img``
function Slide() {
  const [page, setPage] = useState(0)
  const maxPage = Math.ceil(ITEMS.length / VISIBLE_COUNT)

  /**
   * 0~3
   * 3~6...
   */
  const items = ITEMS.slice(
    page * VISIBLE_COUNT,
    page * VISIBLE_COUNT + VISIBLE_COUNT,
  )

  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }

  return (
    <Container>
      <Container margin="0 0 10px 0" flex between>
        <Text bold size="25">
          PLAY . FUN
        </Text>
        <Container>
          <Text bold size="25">
            {page + 1}/{maxPage}
          </Text>
          {page === 0 ? (
            <Button disabled fontSize="25" margin="0 5px 0 0">
              〈
            </Button>
          ) : (
            <Button onClick={handlePrev} fontSize="25" margin="0 5px 0 0">
              〈
            </Button>
          )}
          {page === maxPage ? (
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

      {items.map(({ img, title, content }, idx) => (
        <Container flex margin="0 0 20px 0" key={idx}>
          <Image src={img} alt={title} />
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
      ))}
    </Container>
  )
}

export default Slide
