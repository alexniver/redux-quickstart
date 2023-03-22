import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './features/counter/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  let [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input type="" name="" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment By Amount</button>
        <button aria-label="Increment value" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Increment Async</button>
        <button aria-label="Increment value" onClick={() => dispatch({ type: "ws/send" })}>Send</button>
      </div>
    </div>
  )
}

export default Counter
