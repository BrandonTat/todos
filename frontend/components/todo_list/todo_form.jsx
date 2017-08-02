import React from 'react';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return( e => this.setState({[type]: e.currentTarget.value }));
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: this.uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  uniqueId() {
  return new Date().getTime();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            value = {this.state.title}
            placeholder = "title"
            onChange = {this.update('title')}
          />
        </label>

        <label>Body:
          <input
            type="text"
            value = {this.state.body}
            placeholder="Body"
            onChange = {this.update('body')}
          />
        </label>

        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
