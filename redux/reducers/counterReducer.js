import Actions from '../actions/actions';

const counterReducer = (state = {value: 0}, action) => {
  switch (action.type) {
  case Actions.INCREMENT_COUNTER:
    return {...state, value: state.value + 1};
  case Actions.DECREMENT_COUNTER:
    return {...state, value: state.value - 1};
  default:
    return {...state};
  }
};

export default counterReducer;
