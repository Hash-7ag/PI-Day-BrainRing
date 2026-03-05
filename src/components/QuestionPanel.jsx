import React from 'react'
import QuestionBlock from './QuestionBlock'

function QuestionPanel({ panelVisibility, onClick }) {

   return (
      <>
         {
            panelVisibility
               ?
               <div className='block  
                  z-10 absolute m-0 p-0 w-full h-full bg-secondary/40'>
                  <QuestionBlock onClick={onClick} />
               </div>
               :
               <div className='hidden'></div>
         }
      </>
   )
}

export default QuestionPanel
