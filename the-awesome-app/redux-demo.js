import {createStore} from 'redux';


//initial state
const initialState = {
    count: 5,
    message: 'hello redux'
}

//reducer
const reducer = function(currentState=initialState, action){

    // return the updated state
    if(action.type === "inc_ctr"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type ===  "decr_ctr"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type ===  "set_ctr"){
        return {
            ...currentState,
            count: action.value
        }
    }
    return currentState;
}

//store
const store = createStore(reducer);
console.log("state", store.getState());


// subscribe
store.subscribe(() => {
    console.log("state changed", store.getState());
})

//dispatch action
store.dispatch({type: "inc_ctr"});
store.dispatch({type: "set_ctr", value: 10});
store.dispatch({type: "decr_ctr"});
