import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  render() {
    const { todos, receiveTodo } = this.props;
    const todosList = todos.map(todo => (
      <TodoListItem
        todo={todo}
        key={todo.id}
      />
    ));

    return(
      <div>
        <ul>
          {todosList}
        </ul>

        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
