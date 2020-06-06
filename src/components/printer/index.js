import React from 'react'

import Left from './left'
import Right from './right'
import { PrinterContextProvider } from './context'

function Printer() {
  return (
    <div>
      <PrinterContextProvider>
        <Left />
        <Right />
      </PrinterContextProvider>
    </div>
  )
}

export default Printer
