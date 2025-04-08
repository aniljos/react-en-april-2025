import {useState} from 'react';
import Message from './Message';

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

    console.log("rendering counter...");
    const [count, setCount] = useState(props.initialValue);
    
    function inc(){
        //props.initialValue++;
        //setCount(count + 1);
        //setCount(count + 1);

        //setCount(currentCount => currentCount + 1);
        setCount(function incCount(currentCount){
            return  currentCount + 1
        })
        setCount(currentCount => currentCount + 1);

        console.log("count", count);
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={() => setCount(count - 1)}>Decr</button>
            </div>

            {count > 10 ? <Message text='Hello'/> : null}
        </div>
    )
}

export default Counter