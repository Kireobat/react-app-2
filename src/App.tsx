// import React from 'react'

import { useMediaQuery } from 'react-responsive'

// write a function that checks if the screen is mobile or not

const isMobile = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` })
  return isMobile
}


// images

import bgMobile from './assets/bg-mobile.svg'

import bgDesktop from './assets/bg-desktop.svg'

function App() {

  const bg = isMobile() ? bgMobile : bgDesktop

  return (
    <div className="bg-sky-50 h-[100vh] w-[100vw] overflow-hidden">
      <img src={bg} alt="background" className='fixed top-0 rotate-180 z-0'/>
      <img src={bg} alt="background" className='fixed bottom-0 z-0'/>

      <div className='mt-48'>
        <div className='flex justify-center'>
          <h1 className='z-10 text-3xl font-pop font-semibold'>Log in</h1>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <input type="text" placeholder='Email' className='z-10 w-80 h-10 mt-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          </div>
          <div className='flex justify-center'>
            <input type="password" placeholder='Password' className='z-10 w-80 h-10 mt-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          </div>
          <div className='flex justify-center'>
            <p className='z-10 text-sm font-pop font-semibold text-gray-400'>Need an account? <a href='/signup' className='text-violet-500'>Sign up</a></p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='z-10 w-80 h-10 mt-10 px-4 py-2 rounded-md bg-violet-500 text-white font-pop font-semibold'>Log in</button>
        </div>
      </div>
      
    </div>
  )
}

export default App

