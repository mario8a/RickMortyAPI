import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFromApi } from '../../hooks/useFetch';

export const Characters = ({history}) => {

   const {charaterId} = useParams()
   // console.log(charaterId);

   const {loading , data} = useFetchFromApi(`https://rickandmortyapi.com/api/character/${charaterId}`);
   const {name, image, species, status} = !!data && data;

   const handleBack = () => {

      if(history.length <= 2) {
         history.push('/home')
      } else {
         history.goBack()
      }

   }

   return (
      <div>
         <h1>Character</h1>
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
                  <div className="card mb-3 card-info animate__animated animate__bounceInLeft">
                     <div className="row no-gutters">
                        <div className="col-md-4">
                           <img src={image} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                           <div className="card-body">
                           <h5 className="card-title">Nombre: {name}</h5>
                           <p className="card-text">Especie: {species}</p>
                           <p className="card-text">Status: {status}</p>
                           <button className="btn btn-outline-primary" onClick={handleBack}>
                              Back
                           </button>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               )
         }
         
      </div>
   )
}
