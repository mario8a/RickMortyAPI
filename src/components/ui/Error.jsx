import React from 'react'

export const Error = ({mensaje}) => {
   return (
      <p className="p-4 text-center alert alert-primary">
         {mensaje}
      </p>
   )
}
