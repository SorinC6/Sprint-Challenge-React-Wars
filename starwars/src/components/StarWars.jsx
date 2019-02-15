import React from 'react';
import './StarWars.css'

const StarWars = (props) => {

   return(
      <div className='char-container'>
         <h1 className='char-title'>{props.dataList.name}</h1>
         <h4 className='item-style' >Gender: {props.dataList.gender}</h4>
         <h4 className='item-style' >Skin Color: {props.dataList.skin_color}</h4>
         <h4 className='item-style' >Hair Color: {props.dataList.hair_color}</h4>
         <h4 className='item-style' >Height: {props.dataList.height}</h4>
      </div>
   )
} 

export default StarWars;