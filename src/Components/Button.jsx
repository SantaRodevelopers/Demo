import React from 'react'

const Button = ({color,dp,dn}) => {
  return (
    <div><button style={{backgroundColor: color}} onClick={dp?dp:dn}>Submit</button></div>
  )
}

export default Button