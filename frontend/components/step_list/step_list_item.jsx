import React from 'react';

class StepListItem extends React.Component{
  constructor(props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();
    console.log("step");
  }

  removeStep(e) {
    e.preventDefault();
    console.log("remove");
  }

  render() {
    const {step} = this.props;

    return (
      <li>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
        <button onClick={this.toggleStep}>Toggle Step</button>
        <button onClick={this.removeStep}>Remove Step</button>
      </li>
    );
  }
}

export default StepListItem;
