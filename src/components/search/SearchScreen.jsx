import React, { useEffect, useState } from 'react'
import { Form } from './Form';
import { CharacterList } from '../character/CharacterList';

export const SearchScreen = ({history}) => {

   const [busqueda, guardarBusqueda] = useState('');
   const [personajes, guardarPersonajes] = useState([]);

   useEffect(() => {
      
      const consultarAPI = async () => {
         //si no hay nada, no hacer nginguna consulta
         if(busqueda === '') return;

         const url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;
         const respuesta = await fetch(url);
         const resultado = await respuesta.json();

         guardarPersonajes(resultado.results);
      }
      consultarAPI();

   },[busqueda])

   return (
      <div>
         <h1>Search page</h1>
         <hr/>

         <div className="row">
            <div className="col-md-5 col-sm-12">
               <Form
                  guardarBusqueda={guardarBusqueda}
               />
            </div>
            <div className="col-md-7 col-sm-12 card-content">
               <CharacterList personajes={personajes}/>
            </div>
         </div>
      </div>
   )
}
