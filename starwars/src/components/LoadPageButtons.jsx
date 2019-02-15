import React from 'react';

const LoadMoreButtons = (props) => {
   return(
      <div className='btn-style'>
         <button className='btn-style' onClick={props.prevPage} >Previus Page</button>
         <button className='btn-style' onClick={props.nextPage} >Next Page</button>
      </div>
   )
}

export default LoadMoreButtons;