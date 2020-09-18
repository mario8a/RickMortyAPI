import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({personaje}) => {

   const {image, name, id} = personaje;
   return (
      <>
         <article className="character-card">
            <header>
               <img src={image} alt=""/>
            </header>
            <footer>
               <h5 className="name-character">{name}</h5>
               <Link to={`./charater/${id}`}>
                  Mas..
               </Link>
            </footer>
         </article>
      </>
   )
}
