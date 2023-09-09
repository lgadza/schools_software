
import "./CALAHeroBg.css";
import React, { useState, useEffect } from 'react';

interface TypingProps {
  words: string[];
  typingSpeed?: number;
  eraseSpeed?: number;
}

const TypingEffect: React.FC<TypingProps> = ({ words, typingSpeed = 5, eraseSpeed = 5 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentWord = words[currentWordIndex % words.length];
    if (isErasing) {
      if (currentLetterIndex >= 0) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prevCurrentLetterIndex) => prevCurrentLetterIndex - 1);
        }, eraseSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsErasing(false);
        setCurrentWordIndex((prevCurrentWordIndex) => prevCurrentWordIndex + 1);
        setCurrentLetterIndex(0);
      }
    } else {
      if (currentLetterIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prevCurrentLetterIndex) => prevCurrentLetterIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsErasing(true);
      }
    }
  }, [currentWordIndex, currentLetterIndex, words, typingSpeed, eraseSpeed, isErasing]);

  useEffect(() => {
    const currentWord = words[currentWordIndex % words.length];
    setDisplayedText(currentWord.substring(0, currentLetterIndex));
  }, [currentLetterIndex, words, currentWordIndex]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
