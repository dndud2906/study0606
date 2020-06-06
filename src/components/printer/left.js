import React from 'react'

import { usePrinterContext } from './context'

function Left() {
  const { setValue } = usePrinterContext()
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

export default Left
