import React, { useState } from 'react';

const Flashcard = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
      {showAnswer ? card.answer : card.question}
    </div>
  );
};

export default Flashcard;