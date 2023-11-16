import { useState } from 'react';
import '../Counter-App-Css/Counter.css';
import {PropTypes} from 'prop-types';
import CounterButton from './CounterButton'

CounterButton.propTypes={
    by:PropTypes.number
}

CounterButton.defaultProps={
    by:PropTypes.number
}

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterFromParent(by){
        setCount(count + by)
    }
    function decrementCounterFromParent(by){
        setCount(count - by)
    }
    function resetCounter(){
        setCount(0)
    }

    return(
        <>
            <span className="count">{count}</span>
             <CounterButton by={1} incrementMethod={incrementCounterFromParent} decrementMethod={decrementCounterFromParent}/>
             <CounterButton by={2} incrementMethod={incrementCounterFromParent} decrementMethod={decrementCounterFromParent}/>
             <CounterButton by={5} incrementMethod={incrementCounterFromParent} decrementMethod={decrementCounterFromParent}/>
             <button className="ResetButton"
                onClick={resetCounter}
                >Reset</button>'
        </>
    )
}
