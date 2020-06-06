import React from 'react'

import { usePrinterContext } from './context'

function Right() {
  const { value } = usePrinterContext()
  return <div>input의 값: {value}</div>
}

export default Right
