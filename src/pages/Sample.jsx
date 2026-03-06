import React, { useState } from 'react'
import Button from '../components/Button'
import QuestionPanel from '../components/QuestionPanel'
import { useParams } from 'react-router-dom';
import { pages } from '../data/content'

function Sample() {

   const { pageId } = useParams(); // Get URL parameters
   const page = pages[pageId] || pages.first; // Fallback to first 

   const [panelVisibility, setPanelVisibility] = useState(false);
   const [isQuestionOpened, setIsQuestionOpened] = useState(false);

   const clickButton = (buttonId) => {

      const index = page.questions.findIndex(q => q.id === buttonId);

      setIsQuestionOpened(page.questions[index].isQuestionOpened)

      if (!page.questions[index].isQuestionOpened) {

         page.questions[index].isQuestionOpened = true;


         console.log(`The ${page.questions[index].questionBlockTitle} button is open`);
         setPanelVisibility(!panelVisibility);
         return page.questions[index].isQuestionOpened
      }
      else {
         alert("This button is opened before!");
      }

   }

   return (
      <div className='flex flex-col items-center gap-3'>
         <h1 className="text-3xl font-bold mt-3">{page.title}</h1>
         <div className='grid grid-cols-2 grid-rows-5 grid-flow-col gap-x-8 gap-y-5'>
            {
               page.questions?.map((button) => (
                  <Button
                     key={button.id}
                     title={button.questionBlockTitle}
                     isQuestionOpened={isQuestionOpened}
                     onClick={() => clickButton(button.id)}
                  />
               ))
            }
         </div>
         <QuestionPanel panelVisibility={panelVisibility} onClick={() => setPanelVisibility(!panelVisibility)} />
      </div>
   )
}

export default Sample
