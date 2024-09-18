import React from 'react';
import {useDispatch, useSelector} from 'react-redux';




//action
function Increment(){
    return{
        type:'INCREMENT'
    }
}
function Decrement(){
    return{
        type:'DECREMENT'
    }
}


//reducer
//it will take the prevstate and the action
function counterReducer(state=0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


export function Counter(){
    const dispatch = useDispatch();
    //for retriving the data
    const counter = useSelector(state => state.counter)


    return(
        <>
            <h1>Counter App</h1>
            <div>
                <button onClick={()=>dispatch(Decrement())}>Decrement</button>
                <h3>{counter}</h3>
                <button onClick={()=> dispatch(Increment())}>Increment</button>
            </div>
        </>
    )
}

export default counterReducer;