import React, { useState } from 'react'
import Button from '../components/Button'
import QuestionPanel from '../components/QuestionPanel'

function Sample() {

   const [panelVisibility, setPanelVisibility] = useState(false);

   return (
      <div className='flex flex-col items-center gap-3'>
         <h1 className="text-3xl font-bold mt-3">Theme</h1>
         <div className='def-flex gap-7'>
            <div className='flex flex-col gap-5'>
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
            </div>
            <div className='flex flex-col gap-5'>
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
               <Button onClick={() => setPanelVisibility(!panelVisibility)} />
            </div>
         </div>
         <QuestionPanel panelVisibility={panelVisibility} onClick={() => setPanelVisibility(!panelVisibility)} />
      </div>
   )
}

export default Sample
