import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-center mt-10'>
      <div className='w-[50%] p-6 bg-amber-50 shadow-md rounded-md h-[580px] flex flex-col items-center justify-center'>
        <h4 className='text-center text-2xl font-semibold mb-6'>404 - Page Not Found</h4>
        
        <p className='text-gray-700 text-center mb-8'>
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}   // 👈 navigate to list page
          className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200'
        >
          Go to List Page
        </button>
      </div>
    </div>
  )
}

export default NotFound
