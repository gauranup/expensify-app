import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



const store = configureStore();

/*store.dispatch(addExpense({description:'water bill',amount:4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent bill',amount:109500}));
store.dispatch(setTextFilter('gas'));
                                     
setTimeout(()=>{
 store.dispatch(setTextFilter('bill'))
},3000) 
const state= store.getState();
const visibleExpenses= getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);
console.log(store.getState()); */
 
const jsx= (
   <Provider store={store}>
    <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
