import React from 'react'
import { Link } from 'react-router-dom'
import Container from './shared/container'

const LINKS = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/todo',
    label: 'todo',
  },
  {
    path: '/signup',
    label: 'signup',
  },
]
function Gnb() {
  return (
    <Container>
      {LINKS.map(({ path, label }, idx) => (
        <Link key={idx} to={path}>
          {label}
        </Link>
      ))}
    </Container>
  )
}

export default Gnb
