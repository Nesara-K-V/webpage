import bg from './bg.jpg';
import React from 'react';

export const Main_p = () => {
  return (
    <div className='opening_page'>
        <img src={bg} alt="An example image" 
        className='bg'>
          
        </img>
        <div >
        <h1 className='text-overlay'>HIGHEST</h1>
        <h1 className='text-overlay1'>POTENTIAL</h1>
      </div>
       
    </div>
  )
}
