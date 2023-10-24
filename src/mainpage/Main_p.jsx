import bg from './bg.jpg';
import React from 'react';

export const Main_p = () => {
  return (
    <div className='opening_page'>
        <img src={bg} alt="An example image" 
        className='bg'>
          
        </img>
        <div className='text-overlay'>
        <h1 >HIGHEST</h1>
        <h1 >POTENTIAL</h1>
        </div>
       
    </div>
  )
}
