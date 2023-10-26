import React,{useState} from 'react';
import './counter.style.css';

const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(prevCount=> prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount=> prevCount - 1);
    }


    return (
        <div className='counter'>
            <h1>counter is : {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export {Counter};