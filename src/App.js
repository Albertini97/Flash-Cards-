import React, { useState } from 'react';
import './App.css';

const App = () => {
  const flashcards = [
    { id: 1, question: "¿Qué es React?", answer: "Una biblioteca de JavaScript para construir interfaces de usuario." },
    { id: 2, question: "¿Qué es un componente?", answer: "Una pieza reutilizable de código que define una parte de la UI." },
    { id: 3, question: "¿Qué es el estado?", answer: "Un objeto que almacena datos que pueden cambiar en un componente." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false); // Reinicia para mostrar la pregunta al cambiar de flashcard
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false); // Reinicia para mostrar la pregunta al cambiar de flashcard
  };

  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
        <p>{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}</p>
      </div>
      <div className="navigation">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default App;