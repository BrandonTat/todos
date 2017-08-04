import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//REMOVE AFTER TESTING
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import {receiveSteps, receiveStep, removeStep} from './actions/step_actions';
import {allTodos} from './reducers/selectors';
//
document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore;

  // REMOVE AFTER TESTING
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.removeTodo = removeTodo;

  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  //

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>, root);
});
