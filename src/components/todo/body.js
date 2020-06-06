import React from 'react'
import { useTodoContext } from './context'
import { deleteTodo, fetchTodos } from '../../service/todo'

function Body() {
  const { filteredTodos, setTodos } = useTodoContext()

  const handleDeleteTodo = async (id) => {
    const isDeleted = await deleteTodo(id)

    if (isDeleted) {
      setTodos(await fetchTodos())
    } else {
      window.alert('삭제 실패!')
    }
  }

  const handleUpdateStatus = (todo) => {
    /**
     * 해보기
     */
    console.log('todo', todo)
  }

  return (
    <div>
      {filteredTodos.map((todo) => {
        const { id, title, isDone } = todo

        return (
          <div key={id}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => handleUpdateStatus(todo)}
            />
            <span>{title}</span>
            <button onClick={() => handleDeleteTodo(id)}>삭제</button>
          </div>
        )
      })}
    </div>
  )
}

export default Body
