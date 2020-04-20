import Actions from './actions';
import LoginService from '../services/loginService';

/**
 * LoginActions
 */
class LoginActions {
  /**
   * incrementCounter
   * @param {Object} data
   * @return {{data: null, type: string}}
   */
  afterLogin(data) {
    return {
      type: Actions.LOGIN_SUCCESS,
      data: data,
    };
  }

  /**
   * submitLogin
   * @param {Object} payload
   * @return {function}
   */
  submitLogin(payload) {
    return (dispatch) => {
      LoginService.submitLogin(payload).then((apiRes) => {
        dispatch(this.afterLogin(apiRes));
      }).catch((error) => {
        console.log(error);
        dispatch(this.afterLogin({}));
      });
    };
  }
}

export default new LoginActions();
