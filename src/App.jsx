import { useState,useEffect } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

import { getData } from "./utils";
import { QuizGame } from "./Quiz.class";



const url="https://raw.githubusercontent.com/mkatay/json_quiz/main/questions"



function App() {
  const [quiz,setQuiz]=useState([])
  const [gameState,setGameState]=useState(null)
  const [currentIndex,setCurrentIndex]=useState(0)

  useEffect(()=>{
    getData(url,setQuiz)
  },[])

  useEffect(()=>{
    if(quiz.length>0){
      setGameState(new QuizGame(quiz));
    }  
  },[quiz])

  useEffect(() => {
    gameState && setCurrentIndex(gameState.currentQuestionIndex + 1);
  }, [gameState]);

const submitAnswer = (value) => {
    gameState.submitAnswer(value);  
    setCurrentIndex(gameState.currentQuestionIndex + 1);
};

const restartQuiz = () => {
  gameState.resetGame()
  setCurrentIndex(gameState.currentQuestionIndex +1)
};

   return (
    <div>
      <CssBaseline />
      <Box sx={{
        backgroundColor: lightBlue[500],
        height: "100vh", display: "flex", alignItems: "center"
      }}>
        <Container maxWidth="sm">
          {gameState && !gameState.finishedQuiz && 
          <QuestionCard {...gameState.currentQuestion} 
            shuffledOptions={gameState.shuffledOptions}
            currentIndex={currentIndex} 
            submitAnswer={submitAnswer} />
          }
          {gameState && gameState.finishedQuiz && 
          <Result restartQuiz={restartQuiz} 
                  answers={gameState.answers} 
                  questions={gameState.questions}/>
          }

        </Container>
      </Box>
    </div>
  );
}

export default App;