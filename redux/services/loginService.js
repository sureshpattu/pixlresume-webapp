import apiUtils from '../utils/apiUtils';
import Constants from '../utils/constants';

/**
 * LoginService - Handle all login related services
 */
class LoginService {
  /**
   * submitLogin
   * @param {Object} payload
   * @return {Object}
   */
  submitLogin(payload) {
    const promiseFunc = (resolve, reject) => {
      apiUtils.makeApiCall({
        url: Constants.loginSubmit,
        type: 'POST',
        data: payload,
        contentType: 'application/json',
        callback: (res) => {
          resolve(res);
        },
        errCallback: (err) => {
          reject(err);
        },
        options: {
          showLoader: true,
        },
      });
    };

    return new Promise(promiseFunc);
  }
}

export default new LoginService();
