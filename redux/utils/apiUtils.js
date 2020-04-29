import store from '../store.js';
import LoaderActions from '../actions/loaderActions.js';
import Constants from '../utils/constants';

const GLOBAL_AJAX_TIMEOUT = 60 * 1000;

/**
 * AjaxUtils helps client to make Ajax calls
 */
class AjaxUtils {
  /**
   * Make Api calls
   * @param {Object} reqObject
   */
  makeApiCall(reqObject) {
    console.log(reqObject);
    let {
      url,
      type,
      data,
      contentType = 'application/json',
      callback,
      errCallback,
      beforeSendCall,
      options = {},
      timeout: timeout = GLOBAL_AJAX_TIMEOUT,
    } = reqObject;
    if (!beforeSendCall) {
      beforeSendCall = () => {
      };
    }
    const showLoader = (options.showLoader);
    $.ajax({
      url: url,
      type: type,
      timeout: timeout,
      data: data ? JSON.stringify(data) : null,
      contentType: contentType,
      crossDomain: true,
      beforeSend: function(xhr) {
        if (showLoader === true) {
          store.dispatch(LoaderActions.showLoader());
        }
        if (!options.stopHeaders) {
          xhr.setRequestHeader('key', Constants.appKey);
          const state = store.getState();
          xhr.setRequestHeader('token', (state['userinfo'] || {})['token']);
        }
        beforeSendCall(xhr);
      },
    }).fail((err, textStatus, errorThrown) => {
      if (err) {
        if (showLoader === true) {
          store.dispatch(LoaderActions.hideLoader());
        }
        errCallback(err);
      }
    }).done(function(item, statusText, response) {
      if (showLoader === true) {
        store.dispatch(LoaderActions.hideLoader());
      }
      callback(item, response);
    });
  }
}

export default new AjaxUtils();
