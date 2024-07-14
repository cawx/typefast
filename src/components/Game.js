import React, { useState } from 'react';

export default function Game() {
  const [userInput, setUserInput] = useState('');
  const [counter, setCounter] = useState(0);
  const targetString = 'there is an apple on the tree';
  // handle user input every time that theres a change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  // text response for player. wrong char means red, right one means green
  const textvisual = () => {
    const result = []
    for (let i = 0; i < targetString.length; i++) {
      let char = targetString[i]
      if (i < userInput.length) {
        if (userInput[i] === char) {
          result.push(<span key={i} style={{ color: 'green' }}>{char}</span>)
          console.log('correct')
        } else {
          result.push(<span key={i} style={{ color: 'red' }}>{char}</span>)
          console.log('wrong')
        }
      } else {
        result.push(<span key={i} style={{ color: 'black' }}>{char}</span>)
      }
    }
    return result;
  }
  // counter for game start
  const startgame = () => {
    setCounter(0)
    for (let i = 0; i < 4; i++) {
        setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
    }
  }

  return (
    <div>
      <p>{textvisual()}</p>
      <input 
        id='gameinput'
        value={userInput}
        onChange={handleInputChange}
      />
      <p>{counter}</p>
      <button onClick={startgame}>start</button>
    </div>
  );
}
