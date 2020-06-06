import React, { useState } from 'react'

import Input from '../shared/input'
import { postTodo, fetchTodos } from '../../service/todo'
import { useTodoContext } from './context'

function Header() {
  const [text, setText] = useState('')
  const { setTodos } = useTodoContext()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleEnter = async (e) => {
    if (text && e.keyCode === 13) {
      const isPosted = await postTodo({
        title: text,
        isDone: false,
      })
      if (isPosted) {
        setTodos(await fetchTodos())
        setText('')
      } else {
        window.alert('추가 실패!')
      }
    }
  }
  return (
    <div>
      <Input
        placeholder="오늘 할 일을 적어주세요"
        value={text}
        onChange={handleText}
        onKeyUp={handleEnter}
      />
    </div>
  )
}

export default Header
