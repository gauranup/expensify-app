import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
//import { ProgressPlugin } from 'webpack';
const ExpenseList = (props)=>(
   <div>
     <h1>ExpenseList</h1>
      {props.expenses.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense}/>;
      })}
     
   </div>
);
const mapStateToProps = (state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filter)
        //expenses:state.expenses,
      //filter: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseList);
/*export default connect((state)=>{
  return {
    expenses: state.expenses
  }
})(ExpenseList); */
//export default ConnectedExpenseList;