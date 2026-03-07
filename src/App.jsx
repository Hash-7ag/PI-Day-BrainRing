import { Route, Routes } from "react-router-dom"
import Sample from "./pages/Sample"
import Card from "./tests/Card"

function App() {

   return (
      <div className="flex justify-center w-full h-screen px-9 bg-main_background">
         <Routes>
            <Route path="/" element={<Sample />} />
            <Route path="/:pageId" element={<Sample />} />
            <Route path="/test-1" element={<Card />} />
         </Routes>
      </div>
   )
}

export default App
