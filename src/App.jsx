import { Route, Routes } from "react-router-dom"
import Sample from "./pages/Sample"

function App() {

   return (
      <div className="flex justify-center w-full h-screen px-9 bg-main_background">
         <Routes>
            <Route path="/" element={<Sample />} />
            <Route path="/:pageId" element={<Sample />} />
         </Routes>
      </div>
   )
}

export default App
