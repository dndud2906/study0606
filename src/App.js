import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  SignupPage,
  ErrorPage,
  TodoPage,
  HomePage,
  PracticePage,
} from './pages'
import GlobalStyles from './components/shared/global-styles'
import Gnb from './components/gnb'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Gnb />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/practice" component={PracticePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
    // <div>
    //   <PracticePage />
    // </div>
  )
}

export default App
