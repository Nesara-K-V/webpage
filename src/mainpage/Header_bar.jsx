import React from 'react'

export const Header_bar = () => {
  const handleClick=()=>{
    console.log("item clicked")
  }
  return (
    <div className='header'>
      <div className='heading'>
      <h2>CAROL SOLVAY</h2>
      <h3>Mindset Mastery Mentor</h3>
      </div>
      <div className='menu' >
        <ul className='menu_items'>
          
          <li onClick={handleClick}>HOME</li>
          <li onClick={handleClick}> ABOUT</li>
          <li onClick={handleClick}>CONTACT</li>
        </ul>
      </div>
      </div>
  )
}
