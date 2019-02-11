import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates)=>({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = (date)=>({
  type: 'SORT_BY_DATE',
  date
});

// SORT_BY_AMOUNT
const sortByAmount = (amount)=>({
  type: 'SORT_BY_AMOUNT',
  amount
});

// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  console.log('action', action);
  switch (action.type) {
    case "ADD_EXPENSE":
      // return state.concat(action.expense);
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
    return state.map((expense)=>{
      if (expense.id == action.id) {
        return {
          ...expense, 
          ...action.updates
        };
      } else {
        return expense;
      }
    }); 
    default:
      return state;
  }
};


// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }    
    default:
      return state;
  }
};

// Store creation
let store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

let expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
let expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 3 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));


// Stores for filtersReducer
store.dispatch(setTextFilter('Rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByDate('my sort by date'));

store.dispatch(sortByAmount('amount sort'));

const demoState = {
  expenses: [
    {
      id: "01",
      description: "January rant",
      note: "this is the final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};


// let user = {
//   name: 'John',
//   age: 25
// };


// console.log({ 
//   ...user,
//   location: 'New York',
//   age: 30 
// });