import React from 'react'

function Header({children,theme,setTheme}) {
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-lg'>
      <div className='flex items-center gap-4'>
        <img className='w-20 h-20'
          src='https://raw.githubusercontent.com/fkilld/react-youtube-project-tasks/b960377857c0c756f8ddebec53c69732344c8c1d/src/assets/logo.svg'
          alt=''
        />
        <span className='text-xl font-semibold'>{children}</span>
      </div>
      <div className='flex gap-3'>
        <span onClick={()=> setTheme('light')} 
          className={`w-6 h-6 rounded-full  cursor-pointer transition-colors duration-300 ${theme==='light' ? "bg-yellow-400 border-2 border-gray-300":
            "bg-gray-200"
          }`}></span>
        <span onClick={()=> setTheme('medium')} 
          className={`w-6 h-6 rounded-full  cursor-pointer transition-colors duration-300 ${theme==='light' ? "bg-green-400 border-2 border-gray-300":
            "bg-gray-200"
          }`}></span>
        <span onClick={()=> setTheme('dark')} 
          className={`w-6 h-6 rounded-full  cursor-pointer transition-colors duration-300 ${theme==='light' ? "bg-red-400 border-2 border-gray-300":
            "bg-gray-200"
          }`}></span>
      </div>
      
    </header>
  )
}

export default Header