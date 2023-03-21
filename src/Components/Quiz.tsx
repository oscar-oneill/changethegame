import React, { useEffect, useState } from 'react'
import Results from './Results'
import styles from '../styles/Quiz.module.css'

const Quiz = ({ time, quiz }: any) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>('')
  const [seconds, setSeconds] = useState<number>(time)
  const [score, setScore] = useState<number>(0)
  const [display, setDisplay] = useState<boolean>(false)
  const [choiceMade, setChoiceMade] = useState<boolean>(false)
  const [examCompleted, setExamCompleted] = useState<boolean>(false)

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];
  const totalQuestions = questions.length;
  const percentage = Math.floor(score / totalQuestions * 100)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1)
      } else if (examCompleted) {
        clearTimeout(timer)
        setSeconds(0)
      }
    }, 1000)
  }, [seconds, examCompleted])

  const updateScore = () => {
    if (examCompleted) return
    if (selectedAnswer === questions[activeQuestion].answer) {
      setScore((score) => score + 1)
    }
  }

  const nextAction = () => {
    if (seconds === 0 || totalQuestions === activeQuestion + 1) return
    
    setChoiceMade(false)
    setActiveQuestion((prev) => prev + 1)
  }
  
  const displayResults = () => {
    if (seconds === 0 || totalQuestions === activeQuestion + 1) {
      setDisplay(true)
    }
  }

  const enableButton = () => {
    if (seconds > 0 && !choiceMade) return true
    if (seconds === 0 && !choiceMade) return false
  }

  return (
    <div className={styles.container} style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 10, 0.2), rgba(0, 0, 0, 0.90)), url(${questions[activeQuestion].image})` }}>
      <div className={styles.time}>Question: {activeQuestion+1} of {totalQuestions} / {seconds} second(s) left</div>
      
      <div className={styles.question_container}>
        {question}
      </div>

      <div className={styles.choice_container}>
        {choices.map((choice: any, i: any) => (
          <button key={i} onClick={() => {setSelectedAnswer(choice); setChoiceMade(true);}} className={styles.selection}>{choice}</button>
        ))}
      </div>

      { 
        (seconds === 0 || (totalQuestions === activeQuestion + 1)) ?
        <button disabled={enableButton()} onClick={() => {updateScore(); setExamCompleted(true); displayResults();}} className={styles.next}>Results</button> : /* This button will end the quiz following a selection by the user on the final question; disabled until user makes a selection. */
        <button disabled={!choiceMade} onClick={() => {nextAction(); updateScore();}} className={styles.next}>Next</button> /* This button is to be displayed by default, allowing the user to proceed with subsequent questions. */
      }

      <br/>
      {display && <Results score={percentage} closeDisplay={setDisplay}/>}
    </div>
  )
}

export default Quiz