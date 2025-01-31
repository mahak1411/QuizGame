import Home from "./pages/Home"
import { Router , Route, Routes } from "react-router-dom"
import Quiz from "./pages/Quiz"
import QuizGame from "./components/QuizGame"

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quiz-home" element={<Quiz/>}/>
      <Route path="/quiz-questions" element={<QuizGame/>}/>
</Routes>
  )
}

export default App
