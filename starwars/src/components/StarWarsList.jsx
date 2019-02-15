import React from 'react';
import StarWars from './StarWars';

const StarWarsList = (props) => {
   return(
      <div>
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