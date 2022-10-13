import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, onMistake, active }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (event) => {
    if (event.key !== lettersLeft.charAt(0)) {
      setMistake(true);
      onMistake();
    } else if (
      event.key === lettersLeft.charAt(0) &&
      lettersLeft.length === 1
    ) {
      onFinish();
    } else if (event.key === lettersLeft.charAt(0)) {
      setMistake(false);
      setLettersLeft(lettersLeft.substring(1));
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
