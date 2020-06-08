import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function UserList({ users }) {
  return users.map(({ name }, idx) => (
    <Text key={idx} block>
      {name}
    </Text>
  ))
}

function Footer({ users }) {
  return (
    <Container>
      <Text>회원가입된 유저수: {users.length}</Text>
      <UserList users={users} />
    </Container>
  )
}

Footer.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Footer
