import React from 'react';
import  {CharacterList}  from '../character/CharacterList';
import { useFetchFromApi } from '../../hooks/useFetch';

export const HomeScreen = () => {
   // https://rickandmortyapi.com/api/character/
   
   //Este si funciono, es con async y await la ṕeticion
   // const [state, loading] = useFetchFromApi('https://rickandmortyapi.com/api/character/');
   // const {results} = !!state && state;

   //Sin async y await, del curso de fernando herrera
   const {loading, data} =useFetchFromApi('https://rickandmortyapi.com/api/character/')
   const {results} = !!data && data;

   return (
      <div>
         <h1>Welcome to Rick & Morty API</h1>
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
                  <div className="results">
                     <CharacterList  personajes = {results}/>
                  </div>
               )
         }
      </div>
   )
}
