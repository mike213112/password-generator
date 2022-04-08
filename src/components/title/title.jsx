import React from 'react'
import ProTypes from 'prop-types'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

Title.protoTypes = {
  title: ProTypes.string.isRequired
}

export default Title
