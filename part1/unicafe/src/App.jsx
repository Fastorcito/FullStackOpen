import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
  }

  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)


  const all = good + bad + neutral;
  const negative = bad / all;
  const positive = good / all;
  const average = positive - negative;

  return (
    <>
      <Title text="give feedback"/>
      <div>
        <Button onSmash={goodFeedback} text="good"/>
        <Button onSmash={neutralFeedback} text="neutral"/>
        <Button onSmash={badFeedback} text="bad"/>
      </div>
      <Title text="statistics"/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all { (good + bad + neutral) }</p>
      <p>average {average}</p>
      <p>positive {positive * 100} %</p>
    </>
  )
}

const Button = ({onSmash, text}) => 
  <button onClick={onSmash}>
    {text}
  </button>


const Title = ({text}) => <h2>{text}</h2>

export default App

