import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFromApi } from '../../hooks/useFetch';

export const Characters = () => {

   const {charaterId} = useParams()
   console.log(charaterId);

   const {loading , data} = useFetchFromApi(`https://rickandmortyapi.com/api/character/${charaterId}`);
   const {name, image, species, status} = !!data && data;
   // console.log(name);

   return (
      <div>
         <h1>Characters </h1>
         <hr/>
         {
            loading
            ?
               (
                  <div className="alert alert-info text-center">
                     Loading...
                  </div>
               )
            :
               (
                  <div className="info-personaje">
                     <div className="personaje-imagen">
                        <img src={image} alt={name}/>
                     </div>
                     <div className="personaje-info">
                        <h1>Nombre: {name}</h1>
                        <h5>Especie: {species}</h5>
                        <h5>Status: {status}</h5>
                     </div>
                  </div>
               )
         }
         
      </div>
   )
}
