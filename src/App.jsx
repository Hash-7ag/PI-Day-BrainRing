import { Route, Routes } from "react-router-dom"
import Sample from "./pages/Sample"

function App() {

   return (
      <div className="flex justify-center w-full h-screen px-9 bg-main_background">
         <Routes>
            <Route path="/first" element={<Sample />} />
            <Route path="/second" element={<Sample />} />
            <Route path="/third" element={<Sample />} />
         </Routes>
      </div>
   )
}

export default App
