import clsx from 'clsx';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function TopicSwitcher({ pageId, pages }) {

   const navigate = useNavigate();

   const keys = Object.keys(pages); // ["first", "second"];
   const currentIndex = keys.indexOf(pageId); // what index of pageId


   const topicClass = currentIndex === 0 ? "first"
      : currentIndex === keys.length - 1 ? "last"
         : "";

   const switchTopic = (switchDirection) => {

      if (switchDirection === "next") {
         topicClass == "last" ? alert("This is last topic")
            : navigate(`/${keys[currentIndex + 1]}`);
      }
      else if (switchDirection === "back") {
         topicClass == "first" ? alert("This is first topic")
            : navigate(`/${keys[currentIndex - 1]}`);
      }
   }

   return (
      <div className='w-44 h-16 flex justify-around items-center'>
         <div className={
            clsx('def-move-button',
               topicClass == "first" ? 'def-button-red' : 'def-button-blue'
            )}
            onClick={() => switchTopic("back")}
         >
            <GoChevronLeft size={28} />
         </div>
         <div className={
            clsx('def-move-button',
               topicClass == "last" ? 'def-button-red' : 'def-button-blue'
            )}
            onClick={() => switchTopic("next")}
         >
            <GoChevronRight size={28} />
         </div>
      </div>
   )
}

export default TopicSwitcher
