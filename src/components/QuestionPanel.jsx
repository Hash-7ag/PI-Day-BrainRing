import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import QuestionBlock from './QuestionBlock'

function QuestionPanel({ panelVisibility, onClick, question }) {

   const panelRef = useRef(null);

   useEffect(() => {
      if (!panelRef.current) return;

      gsap.to(panelRef.current, {
         autoAlpha: panelVisibility ? 1 : 0,
         duration: 0.2
      });

   }, [panelVisibility]);

   return (
      <div
         ref={panelRef}
         className='z-10 absolute m-0 p-0 w-full h-full bg-secondary/40'
         style={{ visibility: "hidden", opacity: 0 }}
      >
         {question && (
            <QuestionBlock
               activeQuestion={question}
               onClick={onClick}
               isVisible={panelVisibility}
            />
         )}
      </div>
   )
}

export default QuestionPanel