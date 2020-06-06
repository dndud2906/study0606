import React from 'react'
import Container from '../components/shared/container'
import Todo from '../components/todo'
import { TodoContextProvider } from '../components/todo/context'

function TodoPage() {
  return (
    <TodoContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoContextProvider>
  )
}

export default TodoPage
