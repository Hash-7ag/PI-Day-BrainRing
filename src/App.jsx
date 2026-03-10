import { Route, Routes, useLocation } from "react-router-dom"
import Sample from "./pages/Sample"

function App() {
   const location = useLocation();
   return (
      <div className="flex justify-center w-full h-screen px-9 bg-main_background">
         <Routes>
            <Route path="/:pageId" element={<Sample key={location.pathname} />} />
         </Routes>
      </div>
   )
}

export default App
