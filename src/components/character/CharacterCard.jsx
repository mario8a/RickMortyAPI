import React from 'react'
import { Link } from 'react-router-dom';

export const CharacterCard = ({personaje}) => {

   //Extraer las variables
   const {image, name, id} = personaje;
   return (
      <>
         <div className="cards animate__animated animate__fadeIn">
               <img src={image} className="card-img-top" alt={name}/>
            <div className="cards-info">
               <h5>{name}</h5>
               <Link className="btn boton-mas" to={`./charater/${id}`}>
                  Mas..
               </Link>
            </div>
         </div>
      </>
   )
}
