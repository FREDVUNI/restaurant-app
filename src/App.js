import React from 'react'
import { Header,MainContainer,CreateContainer } from './components'
import { Routes,Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode='wait'>
    <div className="w-screen h-screen flex-col flex bg-primary">
      <Header/>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/create" element={<CreateContainer/>}/>
          </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
