import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function QuestionBlock({ onClick, activeQuestion, isVisible }) {

   const cardRef = useRef(null);
   const flipped = useRef(false);

   useEffect(() => {
      if (isVisible && cardRef.current) {
         // Сбрасываем трансформацию
         gsap.set(cardRef.current, { rotateY: 0, rotateX: 0, z: 0 });
         flipped.current = false;
      }
   }, [isVisible]);

   const handleFlip = () => {
      if (!flipped.current) {
         gsap.to(cardRef.current, {
            z: 40,
            rotateY: 180,
            rotateX: 5,
            duration: 0.6,
            ease: "circ.inOut"
         })

         flipped.current = !flipped.current;
      }
      else {
         alert("Question opened!")
      }
   };

   return (
      <div className='def-flex-col w-full h-screen gap-8'>
         {/* { rounded-3xl bg-main_background def-shadow} */}
         <div className="w-[35rem] perspective-[1200px]">
            <div
               ref={cardRef}
               className="relative w-full"
               style={{ transformStyle: "preserve-3d" }}
            >
               {/* Front */}
               <div className="
                 rounded-3xl bg-main_background text-primary-900 def-shadow
                 px-20 py-12 box-border
                 def-flex
                 backface-hidden
               ">
                  {activeQuestion.question}
               </div>

               {/* Back */}
               <div
                  className="
                    rounded-3xl bg-main_background text-primary-900 def-shadow
                    absolute inset-0
                    px-20 py-12 box-border
                    def-flex
                    backface-hidden
                  "
                  style={{ transform: "rotateY(180deg)" }}
               >
                  {activeQuestion.answer}
               </div>
            </div>
         </div>

         <div className='def-flex gap-7'>
            <button className='def-button 
               bg-main_background-50 hover:bg-accent-100
               text-primary-900 hover:text-accent-800 def-shadow'
               onClick={onClick}
            >
               Back
            </button>
            <button className='def-button 
               bg-main_background-50 hover:bg-soft_background-100
               text-primary-900 hover:text-primary-800 def-shadow'
               onClick={handleFlip}
            >
               Answer
            </button>
         </div>
      </div>
   )
}

export default QuestionBlock
