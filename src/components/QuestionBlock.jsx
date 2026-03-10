import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function QuestionBlock({ onClick, activeQuestion, isVisible }) {
   const cardRef = useRef(null);
   const flipped = useRef(false);

   function isImagePath(str) {
      return /\.(jpe?g|png|gif|bmp|webp|svg)$/i.test(str);
   }

   useEffect(() => {
      if (isVisible && cardRef.current) {
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
         });
         flipped.current = !flipped.current;
      } else {
         alert("Question opened!");
      }
   };

   return (
      <div className="def-flex-col w-full h-screen gap-8">
         <span>
            <div className="w-[35rem] perspective-[1200px]">
               <div
                  ref={cardRef}
                  className="relative w-full"
                  style={{ transformStyle: "preserve-3d" }}
               >
                  {/* Front */}
                  <div
                     className="
                       rounded-3xl bg-main_background text-primary-900 def-shadow
                       px-20 py-12 box-border
                       flex items-center justify-center
                       backface-hidden
                     "
                  >
                     {isImagePath(activeQuestion.question) ? (
                        <div className="max-h-96 flex items-center justify-center">
                           <img
                              src={activeQuestion.question}
                              alt="Вопрос"
                              className="max-w-[88%] max-h-[88%] object-contain rounded-lg"
                           />
                        </div>
                     ) : (
                        <div className="text-center break-words">{activeQuestion.question}</div>
                     )}
                  </div>

                  {/* Back */}
                  <div
                     className="
                       rounded-3xl bg-main_background text-primary-900 def-shadow
                       absolute inset-0
                       px-20 py-12 box-border
                       flex items-center justify-center
                       backface-hidden
                     "
                     style={{ transform: "rotateY(180deg)" }}
                  >
                     <div className="text-center break-words">{activeQuestion.answer}</div>
                  </div>
               </div>
            </div>
         </span>

         <div className="def-flex gap-7">
            <button
               className="def-button bg-main_background-50 hover:bg-accent-100 text-primary-900 hover:text-accent-800 def-shadow"
               onClick={onClick}
            >
               Back
            </button>
            <button
               className="def-button bg-main_background-50 hover:bg-soft_background-100 text-primary-900 hover:text-primary-800 def-shadow"
               onClick={handleFlip}
            >
               Answer
            </button>
         </div>
      </div>
   );
}

export default QuestionBlock;