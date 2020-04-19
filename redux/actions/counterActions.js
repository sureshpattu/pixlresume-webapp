import Actions from './actions';

/**
 * CounterActions
 */
class CounterActions {
  /**
   * incrementCounter
   * @return {{data: null, type: string}}
   */
  incrementCounter() {
    return {
      type: Actions.INCREMENT_COUNTER,
      data: null,
    };
  }

  /**
   * decrementCounter
   * @return {{data: null, type: string}}
   */
  decrementCounter() {
    return {
      type: Actions.DECREMENT_COUNTER,
      data: null,
    };
  }
}

export default new CounterActions();
