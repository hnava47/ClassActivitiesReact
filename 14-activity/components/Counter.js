import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Exports Counter as the default function
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState returns an array of the value and function to change the value, useState takes and argument which is the default value
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // updating the state with it's current value plus one
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // updating the state with it's current value minus one
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
