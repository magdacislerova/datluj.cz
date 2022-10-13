import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'koala', 'medvídek']); //nebo zavolat třikrát tu generateWord()
  const [mistakeCount, setMistakeCount] = useState(0);

  const handleFinish = () => {
    words.shift();
    setWords([...words, generateWord(6)]);
  };

  const handleMistake = () => {
    setMistakeCount(mistakeCount + 1);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakeCount}</div>
      <div className="stage__words">
        {words.map((word) => (
          <Wordbox
            word={word}
            onFinish={handleFinish}
            onMistake={handleMistake}
            key={word}
            active={word === words[0] ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
