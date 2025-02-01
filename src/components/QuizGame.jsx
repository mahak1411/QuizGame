import React, { useEffect, useState } from 'react';

const QuizGame = () => {
  // State variables to manage quiz data, user interaction, and game progress
  const [questions, setQuestions] = useState([]); // Stores fetched quiz questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the current question index
  const [selectedOption, setSelectedOption] = useState(""); // Stores the user's selected answer
  const [score, setScore] = useState(0); // Tracks the user's score
  const [showResult, setShowResult] = useState(false); // Controls when to display the final result

  // Fetching quiz questions from an API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Uw5CrX'); // Replace with a valid API endpoint
        if (!response.ok) throw new Error("Failed to fetch data");
        
        const jsonData = await response.json();
        if (jsonData && jsonData.questions) {
          setQuestions(jsonData.questions);
        } else {
          console.error("Unexpected API response format:", jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Updates the selected option when a user chooses an answer
  const handleOnChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handles answer submission and updates game state
  const handleSubmit = () => {
    if (!questions.length) return; // Prevent errors if questions are not loaded
    
    // Find the correct answer for the current question
    const correctAnswer = questions[currentQuestionIndex].options.find(option => option.is_correct)?.description;
    
    // Update score if the selected answer is correct
    if (selectedOption === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to the next question or show results if it's the last question
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(""); // Reset selected option for the next question
    } else {
      setShowResult(true); // Display the final result
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4'>
      {showResult ? (
        // Final result screen when the quiz is completed
        <div className='bg-white shadow-2xl rounded-lg p-8 text-center w-full max-w-md'>
          <h2 className='text-3xl font-bold text-gray-800'>🎉 Quiz Completed!</h2>
          <p className='text-lg text-gray-700 mt-3'>Your Score: <span className='font-bold text-indigo-600'>{score} / {questions.length}</span></p>
        </div>
      ) : questions.length > 0 ? (
        // Question display section
        <div className='bg-white shadow-2xl rounded-lg p-8 w-full max-w-md'>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4'>{questions[currentQuestionIndex].description}</h1>
          <div className='mt-4 space-y-3'>
            {/* Display options for the current question */}
            {questions[currentQuestionIndex].options.map((option) => (
              <div key={option.id} className='flex items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition'>
                <input
                  type="radio"
                  name="option"
                  id={`option${option.id}`}
                  value={option.description}
                  checked={selectedOption === option.description}
                  onChange={handleOnChange}
                  className='w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                />
                <label htmlFor={`option${option.id}`} className='ml-3 text-gray-700 text-lg cursor-pointer'>{option.description}</label>
              </div>
            ))}
          </div>
          {/* Submit button to move to the next question or finish the quiz */}
          <button 
            onClick={handleSubmit} 
            className='mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300'
          >
            Next ➡️
          </button>
        </div>
      ) : (
        // Loading state before the questions are fetched
        <p className='text-white text-xl font-semibold'>Loading...</p>
      )}
    </div>
  );
};

export default QuizGame;
