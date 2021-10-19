
import React, { useState } from 'react';
import Questions from './components/data/Questions.json';
import "./styles.css";

function App() {

  const [question, setQuestion] = useState(0);
  const [end, setEnd] = useState(false);
  const [help, nextHelp] = useState(0);
  

  const handleAnswer = (correct) => {
    const nextQuestion = question + 1;
    const nextHelper = help + 1;
    const helpStatement = Questions.questions[question].helper;

    if (nextQuestion < Questions.questions.length && correct === true){
      setQuestion(nextQuestion);
      nextHelp(nextHelper);
    } else if (correct === false){
      console.log(helpStatement);
    } else {
      setEnd(true);
    } 
  }

  return (
    <>
      <h1>TESTING QUIZ</h1>
    
      {end ? (<p>Gratulerer! Du er ferdig med Quizen.</p>)
      : (
        <section id="qna">
        <h2>{Questions.questions[question].title}</h2>
        <section id="btn-wrapper">
        {Questions.questions[question].answers.map((answers, i) => (<button type="button" key={i} onClick={()=>handleAnswer(answers.correct)}>{answers.answere}</button>))}
        </section>
        <p></p>
      </section>
      )}
    </>
  );
}

export default App;
