import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/reducers/counterSlice';
import { useEffect, useState } from 'react';

const App = () => {
  const dispatch = useDispatch();
  let { value } = useSelector((state) => state.counter);
  const [animatedValue, setAnimatedValue] = useState(value);

  // Animate value change
  useEffect(() => {
    setAnimatedValue(value);
  }, [value]);

  const incrementHandler = () => {
    dispatch(increment(value + 1));
  };

  const decrementHandler = () => {
    dispatch(decrement(value - 1));
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-zinc-800'>
      <div className='m-10 p-14 rounded-lg shadow-2xl bg-zinc-900 text-white text-center'>
        <h1 className='text-[10vw] font-extrabold mb-8 text-shadow-lg'>
          <span
            className='transition-transform transform ease-out duration-300'
            style={{ transform: `scale(${animatedValue ? 1.1 : 1})` }}
          >
            {animatedValue}
          </span>
        </h1>
        <div className='mt-14 flex justify-center gap-10'>
          <button
            className='bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 text-white px-10 py-4 rounded-lg shadow-lg font-bold transition-all transform hover:scale-110 hover:shadow-[0_0_15px_5px_rgba(72,187,120,0.5)] focus:outline-none'
            onClick={incrementHandler}
          >
            + Increment
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 text-white px-10 py-4 rounded-lg shadow-lg font-bold transition-all transform hover:scale-110 hover:shadow-[0_0_15px_5px_rgba(239,68,68,0.5)] focus:outline-none'
            onClick={decrementHandler}
          >
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
