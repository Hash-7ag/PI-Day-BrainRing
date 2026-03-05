import React from 'react'

function Button({ onClick }) {
   return (
      <div
         onClick={onClick}
         className='
         px-36 py-5 rounded-2xl
         flex justify-center items-center text-center
         bg-secondary hover:bg-secondary-500  transition-all scale-105
         text-main_background
         cursor-pointer
      '>
         Button
      </div>
   )
}

export default Button
