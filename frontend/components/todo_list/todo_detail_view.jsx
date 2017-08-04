import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { todo, removeTodo } = this.props;

    return(
      <div>
        <li>{todo.body}</li>
        <StepListContainer todo_id={ todo.id } />
        <button onClick={ removeTodo }>Remove Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
