import { useState } from 'react'

const Button = (props) => (

<button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood =>{
    console.log('value now', newGood)
    setGood(newGood)
  }

  const setToNeutral = newNeutral =>{
    console.log('value now', newNeutral)
    setNeutral(newNeutral)
  }

  const setToBad = newBad =>{
    console.log('value now', newBad)
    setBad(newBad)
  }


  const DisplayGood = props => <div> <p>Goods: {props.good} </p></div>
  const DisplayNeutral = props => <div> <p>Neutral:{props.neutral} </p></div>
  const DisplayBad = props => <div><p>Bads: {props.bad}</p></div>
  const Total = good + neutral+bad;
  const Average = ((good * 1)+ (neutral * 0) + (bad *-1)) / Total; 
  const Percentage = (good * 100)/ Total;
    return (
    <div>  
        <h1>Give Feedback</h1>
        <Button handleClick = {() => setToGood(good + 1)} text= "good" /> 
        <Button handleClick = {() => setToNeutral(neutral+1)} text= "neutral"/> 
        <Button handleClick = {() => setToBad(bad+1)} text= "bad"/> 
        <h1>Statistics</h1>
        <DisplayGood  good ={good}/>
        <DisplayNeutral neutral ={neutral}/>
        <DisplayBad bad = {bad}/>
        <p>Total: {Total}</p>
        <p>Average: {Average}</p>
        <p>Percentage: {Percentage} % </p>

      </div>
    )}

        

export default App