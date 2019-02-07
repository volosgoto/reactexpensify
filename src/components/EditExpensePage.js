import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  
  return(
    <div>
    This is from my EditExpense  with params {props.match.params.variable}
    </div>
  );
};

export default EditExpensePage;
