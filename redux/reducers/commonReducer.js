import Actions from '../actions/actions';

const commonReducer = (state, action) => {
  switch (action.type) {
  case Actions.SHOW_LOADER: {
    const count = state['loaderCount'] + 1;
    return Object.assign({}, state, {'loaderCount': count, 'bFlags': []});
  }
  case Actions.HIDE_LOADER: {
    const count = state['loaderCount'] - 1;
    return Object.assign({}, state, {'loaderCount': count, 'bFlags': []});
  }
  default:
    return {...state};
  }
};

export default commonReducer;
