import { connect } from 'react-redux';
import {
  removeStep,
  receiveStep
} from '../../actions/step_actions'; 
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  removeStep: step => dispatch(removeStep),
  receiveStep: step => dispatch(receiveStep)
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
