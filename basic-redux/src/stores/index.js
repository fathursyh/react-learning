import { configureStore, createSlice } from "@reduxjs/toolkit";

// ! normal redux
// import { createStore } from "redux";


// const counterReducer = (state = { counter: 0, show: false }, action) => {
//     if (action.type === 'increment') {
//         return { ...state, counter: state.counter + 1 };
//     }
//     if (action.type === 'decrement') {
//         return { ...state, counter: state.counter - 1 };
//     }

//     if (action.type === 'toggle') {
//         return {...state, show: !state.show};
//     }

//     return state;
// }
// export const store = createStore(counterReducer);

// ! redux toolkit
const initialState = {counter: 0, show: false};
const counterSlice = createSlice({
    name: 'counter-slice',
    initialState,
    reducers: {
        // safe to direct mutate (redux using immer)
        increment(state) {state.counter++},
        decrement(state) {state.counter--},
        toggle(state) {state.show = !state.show},
    }
});

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});
export const counterActions = counterSlice.actions;