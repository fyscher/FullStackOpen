import { useState } from 'react'
import "../css/master.css"

const Statistics = (props) => {
  if (props.value == 0) {
    return(<h2>No Data</h2>)
  } else {
    return(
      <table>
        <tbody>
        <tr>
          <th><h3>Stat</h3></th>
          <th><h3>Data</h3></th>
        </tr>
        <StatisticLine text="Good"    value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad"     value={props.bad}/>
        <StatisticLine text="All"     value={props.all}/>
        <StatisticLine text="Average" value={((props.good*1)+(props.bad*(-1)))/props.all}/>
        <StatisticLine text="Percent" value={((props.good/props.all)*100)+"%"}/>
        </tbody>
      </table>
    )
  }
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
    );
}

const App = () => {
  // save clicks of each button to its own state
  const [good,       setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,         setBad] = useState(0)
  const  all = good + neutral + bad;
  
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good"    handleClick={()=>{setGood(good+1)}}/>
      <Button text="Neutral" handleClick={()=>{setNeutral(neutral+1)}}/>
      <Button text="Bad"     handleClick={()=>{setBad(bad+1)}}/>
      <br/>
      <h1>Statistics</h1>
      <Statistics value={all} good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App