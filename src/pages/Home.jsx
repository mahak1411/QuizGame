import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to the Quiz App!</h1>
        <p className="text-gray-600 mb-6">Test your knowledge with fun quizzes and track your progress!</p>
        <Link to={'/quiz-home'}><button  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button></Link>
      </div>
    </div>
  );
};

export default Home;
