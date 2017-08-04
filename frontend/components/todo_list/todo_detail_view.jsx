import React from 'react';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { todo } = this.props;

    return(
      <li>{todo.body}</li>
    );
  }
}

export default TodoDetailView;
