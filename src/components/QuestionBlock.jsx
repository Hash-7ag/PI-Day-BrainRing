import { useRef } from "react";
import { gsap } from "gsap";

function QuestionBlock({ onClick, activeQuestion }) {

   const cardRef = useRef(null);
  const flipped = useRef(false);

  const handleFlip = () => {
      if(!flipped.current){
         gsap.timeline()
        .to(cardRef.current, {
            z: 20,  
            rotateY: 90,
            rotateX: 2.5,
            duration: 0.2,
            ease: "power2.in"
        })
        .to(cardRef.current, {
            z: 40,  
            rotateY: 180,
            rotateX: 5,
            duration: 0.3,
            ease: "power2.out"
        });

        flipped.current = !flipped.current;
      }
      else{
         alert("Question opened!")
      }
  };

   return (
      <div className='def-flex-col w-full h-screen gap-8'>
         {/* { rounded-3xl bg-main_background def-shadow} */}
         <div className='w-96 h-36 perspective-[1200px]'>
            <div
               ref={cardRef}
               className="relative w-full h-full transition-transform"
               style={{
                  transformStyle: "preserve-3d",
               }}
            >
               {/* Front */}
               <div className="rounded-3xl bg-main_background def-shadow
                  absolute w-full h-full 
                  def-flex
                  backface-hidden"
               >
                  {activeQuestion.question}
               </div>

               {/* Back */}
               <div
                  className="
                     rounded-3xl bg-main_background def-shadow
                     absolute w-full h-full 
                     def-flex
                     backface-hidden"
                 style={{
                   transform: "rotateY(180deg)",
                 }}
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
