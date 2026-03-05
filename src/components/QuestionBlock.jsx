import React from 'react'

function QuestionBlock({ onClick }) {



   return (
      <div className='def-flex-col w-full h-screen'>
         <div className='def-flex w-96 h-36 rounded-3xl bg-main_background def-shadow'>
            Question
         </div>

         <div className='def-flex gap-7'>
            <button>Answer</button>

            <button onClick={onClick}>Back</button>
         </div>
      </div>
   )
}

export default QuestionBlock
