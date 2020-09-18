import React from 'react';
import { useParams } from 'react-router-dom';

export const Characters = () => {

   const {charaterId} = useParams()
   console.log(charaterId);

   return (
      <div>
         <h1>Characters </h1>
      </div>
   )
}
