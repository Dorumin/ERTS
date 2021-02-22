import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../redux';
import { incrementCounter, decrementCounter, resetCounter } from '../redux/actions';

export default function Counter() {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrement = useCallback(() => {
        dispatch(incrementCounter());
    }, []);

    const onDecrement = useCallback(() => {
        dispatch(decrementCounter());
    }, []);

    const onReset = useCallback(() => {
        dispatch(resetCounter());
    }, []);

    return (
        <div className="counter">
            <p>Current count: {count}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}
