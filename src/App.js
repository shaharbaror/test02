import { useState } from 'react';


import styles from './App.module.css';
import BoxRow from './components/Boxes/BoxRow';
import Win from './components/Win';

const WordBank = ['hello', 'peace', 'alive', 'colon', 'offer', 'smash', 'wrist', 'haunt', 'clock', 'sheep', 'trunk']


const ChosenWord = WordBank[Math.floor(Math.random() * 10)];

const App = () => {

  const [focusLines, setFocusLines] = useState([true, false, false, false, false]);

  function onSubmitOne() {
    setFocusLines(prevState => {
      const toFirst = prevState[4];
      prevState.pop();
      prevState.unshift(toFirst);
      return [...prevState];
    });
  }

  function plusLoss() {

  }

  function haveWonHandler() {
    <Win />
  }

  return (
    <div >
      <div className={styles.body} tabIndex={0}>
        <BoxRow chosenWord={ChosenWord} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[0]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[1]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[2]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[3]} onSubmit={onSubmitOne} />
        <BoxRow chosenWord={ChosenWord} won={haveWonHandler} loss={plusLoss} onFocus={focusLines[4]} onSubmit={onSubmitOne} />

      </div>
    </div>
  );
};

export default App;