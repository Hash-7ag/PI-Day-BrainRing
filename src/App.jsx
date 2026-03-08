import { Route, Routes } from "react-router-dom"
import Sample from "./pages/Sample"
<<<<<<< Updated upstream
=======
// import Card from "./tests/Card"
>>>>>>> Stashed changes

function App() {

   return (
      <div className="flex justify-center w-full h-screen px-9 bg-main_background">
         <Routes>
<<<<<<< Updated upstream
            <Route path="/first" element={<Sample />} />
            <Route path="/second" element={<Sample />} />
            <Route path="/third" element={<Sample />} />
=======
            <Route path="/" element={<Sample />} />
            <Route path="/:pageId" element={<Sample />} />
            {/* <Route path="/test-1" element={<Card />} /> */}
>>>>>>> Stashed changes
         </Routes>
      </div>
   )
}

export default App
