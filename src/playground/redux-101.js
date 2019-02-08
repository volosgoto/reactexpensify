import { createStore } from "redux";

// Set first time redux state by default value
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };  
    case 'RESET':
      return {count: state.count = 0}; 
    default: 
      return state;  
  }
  
  // if (action.type == 'INCREMENT'){
  //   return {
  //     count: state.count + 1
  //   };
  // }
  // return state; 
});

// Fetch current state
console.log(store.getState());


// ACTIONS - object for change store
// increment, decrement, reset
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'RESET'
});

console.log(store.getState());
