import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );
    
    this.props.receiveTodo(toggledTodo);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    const { done } = todo;

    return (
      <div>
        <li>{todo.title}</li>
        <button onClick={this.toggleTodo}>{done ? "Undo" : "Done" }</button>
        <button onClick={this.handleDelete}>Remove Todo</button>
      </div>
    );
  }
}

export default TodoListItem;
