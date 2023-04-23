import classes from './Button.module.css'
import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className={classes[props.type]}>
      Click
    </button>
  )
}

export default Button
