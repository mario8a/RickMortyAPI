import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Error } from '../ui/Error';

export const Form = ({guardarBusqueda}) => {

   const [formValues, handleInputChange] = useForm({
      termino: ''
   });
   const [error, setError] = useState(false);

   const {termino} = formValues;

   const buscarPersonajes = (e) => {
      e.preventDefault();
      //valudar
      if(termino.trim() === '' ) {
         setError(true);
         return;
      }
      setError(false);
      //enviar el termino hacia el componente principal
      guardarBusqueda(termino);


   }

   return (
      <form onSubmit={buscarPersonajes}>
         <input 
            type="text"
            placeholder="Find a character"
            className="form-control"
            autoComplete="off"
            name="termino"
            onChange={handleInputChange}
         />
         <button
            type="submit"
            className="btn m-1 btn-block btn-primary"
         >
            Search
         </button>

         {error ? (
           <Error mensaje="Agregar un termino de busqueda" />
         ): null}
      </form>
   )
}
