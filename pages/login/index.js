import React from 'react';
import '../../scss/index.scss';
import './css/login.scss';
import Link from 'next/link';
import Header from '../../components/header';
import Input from '../../components/form/input';
import PropTypes from 'prop-types';
import LoginActions from '../../redux/actions/loginActions';
import {connect} from 'react-redux';

/**
 * Login - helps user to login into app resume portal
 */
class Login extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * handleInputChange
   * @param {event} event
   */
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  /**
   * login form submit
   * @param {event} event
   * @return {boolean}
   */
  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    console.log(this.state);
    if (!email || !password) {
      alert('please enter your details');
      return false;
    }

    this.props.submitLogin({
      email: this.state.email,
      password: this.state.password,
    });
  }

  /**
   * returns JSX
   * @return {html}
   */
  render() {
    return (
      <section className="login_pg signup_pg">
        <Header isLoggedIn={true}/>
        <section className="common_main_sec">
          <div className="cont_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="login_form_sec">
                    <div className="login-sec-wrap">
                      <div className="row">
                        <div className="col-xs-4 col-sm-6 col-md-6">
                          <div className="form-group pixl_form_group">
                            <div className="signup_title_wrap">
                              <div className="title">Login</div>
                              <div className="sub_title">Welcome Back!</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form className="" id="jsApplicantLoginForm" onSubmit={this.handleSubmit}>
                        <Input
                          type="text"
                          title="Email"
                          extraClass="form-control"
                          themeClass="pixl_form_group"
                          placeholder="Your email address"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleInputChange}
                        />
                        <Input
                          type="text"
                          title="Password"
                          extraClass="form-control"
                          themeClass="pixl_form_group"
                          placeholder="Enter your password"
                          value={this.state.password}
                          name="password"
                          onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <button type="submit" className="btn btn_big btn_blue">LOGIN</button>
                            </div>
                            <div className="col-md-6">
                              <Link href="/login/forgot-password">
                                <a className="cta_link">forgot password</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (payload) => dispatch(LoginActions.submitLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

