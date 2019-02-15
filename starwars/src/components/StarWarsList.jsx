import React from 'react';
import StarWars from './StarWars';
import './StarWars.css'

const StarWarsList = (props) => {
   return(
      <div className='list-container'>
         {
            props.dataList.map((character) =>(
               <StarWars
                  key={character.created}
                  dataList={character}
               />
            ))
         }
      </div>
   )
}
export default StarWarsList;