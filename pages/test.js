import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CounterActions from '../redux/actions/counterActions';

/**
 * Test sample code
 */
class Test extends React.Component {
  /**
   * getting initial state from another component
   * @param {Object} store
   */
  static getInitialProps({store}) {
  }

  /**
   * Initial props
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * returns JSX
   * @return {html}
   */
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

Test.propTypes = {
  decrementCounter: PropTypes.func,
  incrementCounter: PropTypes.func,
  counter: PropTypes.number,
};

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(CounterActions.incrementCounter()),
  decrementCounter: () => dispatch(CounterActions.decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
