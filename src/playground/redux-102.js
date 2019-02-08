import { createStore } from "redux";

// Set first time redux state by default value
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      let increment = (typeof action.incrementBy === 'number') ? action.incrementBy : 1;
      return { count: state.count + increment };
    case 'DECREMENT':
      let decrement = (typeof action.decrementBy === 'number') ? action.decrementBy : 1;
      return { count: state.count - decrement };  
    case 'RESET':
      return {count: state.count = 0}; 
    case 'SET':
      return { 
        count: action.count // 101
      };  
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
// console.log(store.getState());


// Watch for changes of redux store state
let unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

// ACTIONS - object for change store
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5

});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'SET',
  count: 101 // action.count
});


unsubscribe(); // stops the subscription

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 322 // action.count
});

