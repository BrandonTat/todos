import React from 'react';
import StepListItemContainers from './step_list_item_containers';

class StepList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { steps } = this.props;
    const stepItems = steps.map(step => (
      <StepListItemContainers
        key={step.id}
        step={step} />
    ));

    return (
      <div>
        <ul>
          { stepItems }
        </ul>
      </div>
    );
  }
}

export default StepList;
