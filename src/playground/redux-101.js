import { createStore } from "redux";

// Set first time redux state by default value
const store = createStore((state = { count: 0 }) => {
  return state;
});

// Fetch current state
console.log(store.getState());

// ACTIONS
