import React from 'react'
import Button from './Button'

const Nav = () => {
    function displayprevious(){
        console.log('previous...')
    }
  return (
    <>
    <div>Nav</div>
    <Button color='red' dp={displayprevious} />
    </>
    

  )
}

export default Nav