import React from 'react';

const Navigation = ({ onNext, onPrev }) => {
  return (
    <div className="navigation">
      <button onClick={onPrev}>Anterior</button>
      <button onClick={onNext}>Siguiente</button>
    </div>
  );
};

export default Navigation;