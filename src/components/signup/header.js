import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function Header({ title = '기본 타이틀' }) {
  return (
    <Container padding="20px 0">
      <Text color="mint" size="24" bold>
        {title}
      </Text>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
