import React from 'react'

function QuestionBlock({ onClick }) {



   return (
      <div className='def-flex-col w-full h-screen gap-8'>
         <div className='def-flex w-96 h-36 rounded-3xl bg-main_background def-shadow'>
            Question
         </div>

         <div className='def-flex gap-7'>
            <button className='def-button 
            bg-main_background-50 hover:bg-accent-100
            text-primary-900 hover:text-accent-800 def-shadow
            
            ' onClick={onClick}>Back</button>

            <button className='def-button 
            bg-main_background-50 hover:bg-soft_background-100
            text-primary-900 hover:text-primary-800 def-shadow
            
            '>Answer</button>
         </div>
      </div>
   )
}

export default QuestionBlock
