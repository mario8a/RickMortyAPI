import React from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { useFetchFromApi } from '../../hooks/useFetch';
import { CharacterList } from '../character/CharacterList';

export const SearchScreen = ({history}) => {

   const location = useLocation();
   const {q = ''} = queryString.parse(location.search);
   console.log(q)

   const [ formValues, handleInputChange, reset ] = useForm( {
      busqueda: q
   } );
   const {busqueda} = formValues;

   const {loading , data} = useFetchFromApi(`https://rickandmortyapi.com/api/character/?name=${busqueda}`);
   const {results} = !!data && data;

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(busqueda);
      if(busqueda.trim() === '' || results.length === 0) {
         console.log('error');
         return;
      }
      history.push(`?q=${busqueda}`);
      console.log(results);

   }

   return (
      <div>
         <h1>Search page</h1>
         <hr/>

         <div className="container row">
            <div className="col-md-5 col-sm-12">
               <form action="" onSubmit={handleSubmit}>
                  <input 
                     type="text"
                     placeholder="Find a character"
                     className="form-control"
                     name="busqueda"
                     autoComplete="off"
                     value={busqueda}
                     onChange={handleInputChange}

                     />
                  <button
                     type="submit"
                     className="btn m-1 btn-block btn-primary"
                  >
                     Search
                  </button>
               </form>
            </div>
            <div className="col-md-7 col-sm-12">

               {
                  (q === '')
                  &&
                  <div className="alert alert-info">
                     Search a Character
                  </div>
               }

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
         </div>
      </div>
   )
}
