import React from 'react'

function Button({ onClick }) {
   return (
      <div
         onClick={onClick}
         className='
            px-36 py-5 rounded-2xl
            flex justify-center items-center text-center 
            transition-all scale-105
            cursor-pointer
            def-button-blue
         '
      >
         Button
      </div>
   )
}

export default Button
