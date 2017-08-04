import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { todo } = this.props;

    return(
      <div>
        <li>{todo.body}</li>
        <StepListContainer todo_id={ todo.id } />
      </div>
    );
  }
}

export default TodoDetailView;
