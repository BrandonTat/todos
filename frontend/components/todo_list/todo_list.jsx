import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component{
  render() {
    const { todos } = this.props;
    const todosList = todos.map(todo => (
      <TodoListItem
        todo={todo}
        key={todo.id}
      />
    ));

    return(
      <ul>
        {todosList}
      </ul>
    );
  }
}

export default TodoList;
