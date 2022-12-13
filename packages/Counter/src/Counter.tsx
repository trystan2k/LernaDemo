import { Button } from '@lerna-demo/button';
import { useState } from 'react';

export type CounterProps = {
  initialCount?: number;
};

export const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialCount);
  return (
    <>
      <Button label="-" type="button" onClick={() => setCounter(prev => prev - 1)} />
      {counter}
      <Button label="+" type="button" onClick={() => setCounter(prev => prev + 1)} />
    </>
  );
};
