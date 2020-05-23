import React, { useState } from 'react'

import Header from '../../components/signup/header'
import Body from '../../components/signup/body'
import Footer from '../../components/signup/footer'
import Container from '../../components/shared/container'

function Signup() {
  const [users, setUsers] = useState([
    { name: '가', password: '1234' },
    { name: '나', password: '1234' },
    { name: '다', password: '1234' },
  ])

  return (
    <Container maxWidth="720" centered>
      <Header title="회원가입 페이지" />
      <Body />
      <Footer users={users} />
    </Container>
  )
}

export default Signup
