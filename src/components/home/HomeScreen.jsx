import React from 'react';
import  {CharacterList}  from '../character/CharacterList';
import { useFetchFromApi } from '../../hooks/useFetch';

export const HomeScreen = () => {
   // https://rickandmortyapi.com/api/character/

   // useEffect(() => {

   //    const consultarAPI = async() => {
   //       const url = `https://rickandmortyapi.com/api/character/`;
   //       const data = await fetch(url);
   //       const personajes = await data.json();

   //       guardarPersonajes(personajes.results);
   //    }

   //    consultarAPI();
   // },[])

   const [state, loading] = useFetchFromApi('https://rickandmortyapi.com/api/character/');
   const {results} = !!state && state;

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
