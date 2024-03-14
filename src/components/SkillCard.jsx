import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = () => {


  return (
    <div>SkillCard</div>
  )
}

SkillCard.propTypes = {
    icon: PropTypes.JSX.Element,
    label: PropTypes.string,
    color: PropTypes.string,
}

export default SkillCard