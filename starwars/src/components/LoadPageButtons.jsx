import React from 'react';
import './StarWars.css'

const LoadMoreButtons = (props) => {
   return(
      <div className='btn-container'>
         <button className='btn-style' onClick={props.prevPage} >Previus Page</button>
         <button className='btn-style' onClick={props.nextPage} >Next Page</button>
      </div>
   )
}

export default LoadMoreButtons;