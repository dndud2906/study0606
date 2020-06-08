import React from 'react'
import { useTodoContext } from './context'

function Footer() {
  const { filteredTodos, setFilter } = useTodoContext()
  return (
    <div>
      <span>갯수 : {filteredTodos.length}</span>
      <button onClick={() => setFilter('ALL')}>ALL</button>
      <button onClick={() => setFilter('TODO')}>TODO</button>
      <button onClick={() => setFilter('DONE')}>DONE</button>
    </div>
  )
}

export default Footer
