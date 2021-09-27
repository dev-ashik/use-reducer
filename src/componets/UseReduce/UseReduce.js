import React, {useReducer} from 'react';

const initialState = {count: 0}
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
            break;
        case 'DECREMENT':
            return {count: state.count - 1}
            break;
        default: 
            return state;
    }
}

const UseReduce = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>This is Reducer count: {state.count}</h1>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>increment</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default UseReduce;