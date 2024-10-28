import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const getVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const getRandomAnekdootti = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const getNextAnekdootti = () => {
    const nextIndex = (selected + 1) % anecdotes.length;
    setSelected(nextIndex);
  };

  const mostVotes = () => {
    const maxVotes = Math.max(...votes);
    const maxIndex = votes.indexOf(maxVotes);
    return { anecdote: anecdotes[maxIndex], votes: maxVotes };
  };

  const mostVotesAnecdote = mostVotes();

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} </p>
      <button onClick={getVote}>Vote</button>
      <button onClick={getNextAnekdootti}>Näytä seuraava anekdootti </button>
      <button onClick={getRandomAnekdootti}>
        Näytä satunnainen anekdootti
      </button>
      <h1>Eniten ääniä saanut anekdootti</h1>
      <p>{mostVotesAnecdote.anecdote}</p>
      <p>has {mostVotesAnecdote.votes} votes</p>
    </div>
  );
};

export default App;
