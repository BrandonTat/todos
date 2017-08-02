import React from 'react';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;


    return (
      <div>
        <li>{todo.title}</li>
        <button onClick={this.handleDelete}>Remove Todo</button>
      </div>
    );
  }
}

export default TodoListItem;
