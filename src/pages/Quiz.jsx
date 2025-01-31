import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col border min-w-[50vh] p-4'>
      <h1 className='text-2xl font-semibold text-center mb-4'>Welcome to the Ultimate Quiz Game</h1>
      <p className='text-center mb-6 text-lg text-gray-700'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae eos repudiandae fugiat voluptates sunt praesentium nesciunt quia mollitia libero eius incidunt fuga ad facere maxime! Suscipit quas et accusantium.
      </p>
     <Link to={'/quiz-questions'}><button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200'>
        Click Here to Start the Quiz
      </button></Link> 
    </div>
  )
}

export default Quiz
