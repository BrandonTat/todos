import React from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {detail: false};

    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
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

  render() {
    const { todo } = this.props;
    const { done } = todo;
    let detail;

    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo}/>;
    }

    return (
      <div>
        <h3><a onClick={this.toggleDetail}>{todo.title}</a></h3>
        {detail}
        <button onClick={this.toggleTodo}>{done ? "Undo" : "Done" }</button>
      </div>
    );
  }
}

export default TodoListItem;
