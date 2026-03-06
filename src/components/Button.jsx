import clsx from "clsx";

function Button({ onClick, title, isQuestionOpened }) {


   return (
      <div
         onClick={onClick}
         className={clsx(
            'px-36 py-5 rounded-2xl flex justify-center items-center text-center transition-all scale-105 hover:scale-[1.07] cursor-pointer',
            !isQuestionOpened ? 'def-button-blue' : 'def-button-red')}
      >
         {title}
      </div>
   )
}

export default Button
