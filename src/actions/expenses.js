import uuid from 'uuid';
export const addExpense = ({description = '',amount=0,note='',createdAt=0}={}) =>({
    type: 'ADD_EXPENSE',
    expense:{
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
 });
 //Edit Expense
 export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


 //Remove Expense
export const removeExpense = ({id}={})=> ({
    type: 'REMOVE_EXPENSE',
    id
  });