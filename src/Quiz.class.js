export class QuizGame {
    constructor(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.answers = [];
    }
  
    get currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    get finishedQuiz() {
      return this.currentQuestionIndex === this.questions.length;
    }
  
    submitAnswer(answer) {
      this.answers.push(answer);
      this.currentQuestionIndex++;
    }
    resetGame() {
        this.currentQuestionIndex = 0;
        this.answers = [];
      }

    get shuffledOptions(){
        return this.questions[this.currentQuestionIndex].options.sort(()=>0.5-Math.random())
    }
  }