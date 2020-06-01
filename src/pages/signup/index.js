import React, { useState, useEffect } from 'react'

import Header from '../../components/signup/header'
import Body from '../../components/signup/body'
import Footer from '../../components/signup/footer'
import Container from '../../components/shared/container'

function Signup() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const users = localStorage.getItem('users')

    if (users) {
      setUsers(JSON.parse(users)) //string형식으로 받은 users를 다시 parse
    }
  }, [])
  // 두번째를 []로 넣으면 didMount처럼 그려지고나서 바로 한번 동작한다.

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  // users를 string형식으로 저장-> JSON.stringify(users)

  const handleAddUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <Container maxWidth="720" centered>
      <Header title="회원가입 페이지" />
      <Body onAddUser={handleAddUser} />
      <Footer users={users} />
    </Container>
  )
}

export default Signup
