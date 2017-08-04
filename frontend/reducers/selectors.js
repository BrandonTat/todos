export const allTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

export const allSteps = ({ steps }) => (
  Object.keys(steps).map(id => steps[id])
);

export const stepsByTodoId = (state, todoId) => {
  let steps = allSteps(state);

  return steps.filter(step => step.todo_id == todoId);
};
