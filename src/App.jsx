import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sample from './pages/Sample';

function App() {
   const location = useLocation();
   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
            <Route path="/:pageId" element={<Sample />} />
         </Routes>
      </AnimatePresence>
   );
}

export default App
