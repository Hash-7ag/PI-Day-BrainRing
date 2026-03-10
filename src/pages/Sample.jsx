import React, { useState } from 'react'
import Button from '../components/Button'
import QuestionPanel from '../components/QuestionPanel'
import { pages } from '../data/content'
import TopicSwitcher from '../components/TopicSwitcher';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';

function Sample() {
   const location = useLocation();
   const direction = location.state?.switchDirection || 'forward';
   const { pageId } = useParams(); // Get URL parameters
   const page = pages[pageId] || pages.first; // Fallback to first 

   const [questions, setQuestions] = useState(page.questions);
   const [panelVisibility, setPanelVisibility] = useState(false);
   const [activeQuestion, setActiveQuestion] = useState(null);

   const closePanel = () => {
      setPanelVisibility(false);
   };

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

   return (
      <motion.div
         initial={{ opacity: 0, x: direction === 'forward' ? 100 : -100 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: direction === 'forward' ? -100 : 100 }}
         transition={{ duration: 0.3 }}
         className="flex flex-col justify-center items-center gap-3"
      >
         <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className="select-none  text-3xl font-bold text-primary-900">{page.title}</h1>
            <div className='grid grid-cols-2 grid-rows-5 grid-flow-col gap-x-8 gap-y-5'>
               {
                  questions.map((button) => (
                     <Button
                        key={button.id}
                        title={button.questionBlockTitle}
                        isQuestionOpened={button.isQuestionOpened}
                        onClick={() => clickButton(button.id)}
                     />
                  ))
               }
            </div>
            <div>
               <TopicSwitcher pageId={pageId} pages={pages} />
            </div>
            <QuestionPanel
               panelVisibility={panelVisibility}
               question={activeQuestion}
               onClick={closePanel}
            />
         </div>
      </motion.div>
   )
}

export default Sample
