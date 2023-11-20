import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  );
}

const Votes = ({votes, anecdotes}) => {
  const highest = Math.max(...votes)
  const many = votes.map((m) => {
    if (m === highest) {
      console.log(m)
    } else {
      console.log('nothing')
    }
  })


  // look through votes array and select each element that matches 'highest',
  // then add its index to a new array
  
  
  console.log(votes)
  console.log("highest: "+highest)
  console.log(many)

  return(
    <div>
      {anecdotes[many]}
    </div>
  );
}

const App = () => 
{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,       setVotes] = useState(new Uint8Array(8))

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy)
  }

  return (
    <div>
      <h2>Random Anecdote</h2>
      <div>
        {anecdotes[selected]}
      </div>
      <Button handleClick={()=>{setSelected(Math.floor(Math.random() * anecdotes.length))}} text={"new"}/>
      <Button handleClick={handleVote} text={"upvote"}/>
      <br/>
      <h2>Anecdote with the most AnecVotes</h2>
      <Votes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App