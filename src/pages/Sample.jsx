import React, { useState } from 'react'
import Button from '../components/Button'
import QuestionPanel from '../components/QuestionPanel'
import { useParams } from 'react-router-dom';
import { pages } from '../data/content'

function Sample() {

   const { pageId } = useParams(); // Get URL parameters
   const page = pages[pageId] || pages.first; // Fallback to first 

   const [panelVisibility, setPanelVisibility] = useState(false);
<<<<<<< Updated upstream
=======
   const [activeQuestion, setActiveQuestion] = useState(null);

   const clickButton = (buttonId) => {
      const index = questions.findIndex(q => q.id === buttonId);

      if (!questions[index].isQuestionOpened) {
         const newQuestions = [...questions];
         newQuestions[index] = {
            ...newQuestions[index],
            isQuestionOpened: true
         }

         setQuestions(newQuestions);
         setActiveQuestion(newQuestions[index]);
         setPanelVisibility(true);
      }
      else {
         alert("This button is opened before!");
      }
   }
>>>>>>> Stashed changes

   return (
      <div className='flex flex-col items-center gap-3'>
         <h1 className="text-3xl font-bold mt-3">{page.title}</h1>
         <div className='grid grid-cols-2 grid-rows-5 gap-x-8 gap-y-5'>
            {
               page.questions?.map((button) => (
                  <Button key={button.id} title={button.questionBlockTitle} onClick={() => setPanelVisibility(!panelVisibility)} />
               ))
            }
         </div>
<<<<<<< Updated upstream
         <QuestionPanel panelVisibility={panelVisibility} onClick={() => setPanelVisibility(!panelVisibility)} />
=======
         <QuestionPanel
            panelVisibility={panelVisibility}
            question={activeQuestion}
            onClick={() => setPanelVisibility(false)}
         />
>>>>>>> Stashed changes
      </div>
   )
}

export default Sample
