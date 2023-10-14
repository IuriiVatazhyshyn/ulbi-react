import { useState } from "react";
import classes from './counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={classes.button}>
            <button onClick={handleClick}>Increment</button>
            <div>{count}</div>
        </div>
    )
}

export default Counter;