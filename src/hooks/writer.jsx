import { useEffect, useRef, useState } from "react";

export const RapidLetterSearch = ({ word}) => {
  const [displayedLetters, setDisplayedLetters] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (currentIndex >= word.length) return; // All letters processed

    const targetLetter = word[currentIndex].toUpperCase();
    const generateRandomLetter = () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ .';
      const generated_letter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
      return  generated_letter
    }

    intervalRef.current = setInterval(() => {
   
      const randomLetter = generateRandomLetter();
      setCurrentLetter(randomLetter);
      if (randomLetter === targetLetter) {
        clearInterval(intervalRef.current);
        setDisplayedLetters((prev) => prev + randomLetter);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5); 

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, word]);

  // Start search when in view
  useEffect(() => {
    if (currentIndex < word.length && currentLetter !== word[currentIndex]) {
      // Start the rapid search
      // The effect above handles this
    }
  }, [currentLetter, currentIndex, word]);

  return (
    <span>
      {displayedLetters}
    </span>
  );
};
