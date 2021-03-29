import { StrictMode } from 'react';
import { createStore} from 'redux';
const incrementCount= ({incrementBy=1}={})=>({
  type:'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount =({decrementBy=1}={})=>({
  type:'DECREMENT',
  decrementBy: decrementBy
});

const setCount=({count})=>({
   type:'SET',
   count:count
});

const resetCount=()=>({
  type:'RESET'
});
//Reducers
// 1. Reducers are pure function(output is determined by input)
// 2. Never change state or action


const countReducer=(state = {count : 0},action)=>{
  switch(action.type){
      case 'INCREMENT':
        //const incrementBy= typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        
        return{
            count: state.count+ action.incrementBy
        };
      case 'DECREMENT':
        //const decrementBy=typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return{
           count:state.count-action.decrementBy
        };
      case 'SET':
        return{
          count:action.count
        }
        default:
         return state;
  }
 
} 
const store= createStore(countReducer);


store.subscribe(()=>{
    console.log(store.getState())
})
 


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
  });
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount());

store.dispatch({
    type: 'DECREMENT',
    decrementBy:10
  });

store.dispatch(decrementCount({decrementBy:3}));
store.dispatch({
   type:'SET',
   count:101
});
store.dispatch(setCount({count:101}));