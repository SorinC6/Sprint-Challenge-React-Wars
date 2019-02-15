import React from 'react';

const StarWars = (props) => {

   return(
      <div>
         <h1>{props.dataList.name}</h1>
         <h4>Gender: {props.dataList.gender}</h4>
         <h4>Skin Color: {props.dataList.skin_color}</h4>
         <h4>Hair Color: {props.dataList.hair_color}</h4>
         <h4>Height: {props.dataList.height}</h4>
      </div>
   )
} 

export default StarWars;