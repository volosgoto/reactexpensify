import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "01",
      descriprion: "January rant",
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
