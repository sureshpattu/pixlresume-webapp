import Actions from '../actions/actions';

const loginReducer = (state = {value: 0}, action) => {
  switch (action.type) {
  case Actions.LOGIN_SUCCESS:
    return {...state, user: action.data};
  default:
    return {...state};
  }
};

export default loginReducer;
