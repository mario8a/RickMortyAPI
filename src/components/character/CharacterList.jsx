import React from 'react';
import { CharacterCard } from './CharacterCard';

export const CharacterList = ({personajes}) => {
   console.log(personajes);
   return (
      <>
         {personajes.map(personaje => (
            <CharacterCard 
               key={personaje.id}
               personaje={personaje}
            />
         ))}
      </>
   )
}


