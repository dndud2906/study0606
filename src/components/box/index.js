import React, { useState } from 'react'

function Box() {
  const [color, setColor] = useState('yellow') //useState(배열형식으로 받는다) color = yellow , setColor(color 바꾸는 함수)

  /**
   * width, height 해보기
   */
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handleWidth = (e) => {
    setWidth(e.target.value)
  }

  const handleHeight = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div>
      <input placeholder="색상 값을 입력해주세요" onChange={handleColor} />
      <br />
      <input placeholder="가로 길이를 입력해주세요." onChange={handleWidth} />
      <br />
      <input placeholder="세로 길이를 입력해주세요." onChange={handleHeight} />
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: '1px solid',
          background: color,
        }}
      ></div>
    </div>
  )
}

export default Box
