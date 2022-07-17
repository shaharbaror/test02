import { useState, useEffect } from 'react';


import styles from './App.module.css';
import BoxRow from './components/Boxes/BoxRow';
import Win from './components/Win';

const WordBank = ['hello' /*, 'peace', 'alive', 'colon', 'offer', 'smash', 'wrist', 'haunt', 'clock', 'sheep', 'trunk' */];


const ChosenWord = WordBank[Math.floor(Math.random())];

const App = () => {

  const [loseCounter, setLoseCounter] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [focusLines, setFocusLines] = useState([true, false, false, false, false, false]);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    if (loseCounter === 6) {
      console.log("You lose");
    }
  }, [loseCounter])

  function onSubmitOne() {
    setFocusLines(prevState => {
      const toFirst = prevState[4];
      prevState.pop();
      prevState.unshift(toFirst);
      return [...prevState];
    });
  }

  function plusLoss() {
    setLoseCounter(prevValue => {
      return prevValue + 1;
    });


  }

  function haveWonHandler() {
    setIsWin(true);
  }

  function resetGameHandler() {
    setLoseCounter(0);
    setIsWin(false);
    setFocusLines(true, false, false, false, false, false);
    const wins = localStorage.getItem("WINS");
    localStorage.setItem("WINS", parseInt(wins) + 1);
    setIsReset(true);
  }

  function resetValues() {
    setTimeout(() => { setIsReset(false) }, 500);
    setIsReset(true);
    setFocusLines(true, false, false, false, false, false);

  }

  return (
    <div >
      {isWin && <Win exitWin={resetGameHandler} />}
      <div className={styles.body} tabIndex={0}>
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[0]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[1]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[2]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[3]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[4]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} isReset={isReset} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[5]} onSubmit={onSubmitOne} />
        <button type="button" className={styles.button} onClick={resetValues} >Play Again</button>

      </div>


    </div>
  );
};

export default App;